import { COMPANY_INFO } from "@/data/company";
import {
  buildCustomerConfirmationEmail,
  buildEstimateEmail,
} from "@/lib/estimate-email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

interface EstimateRequestPayload {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  propertyType?: string;
  roofService?: string;
  details?: string;
}

const DEFAULT_FROM = "Raymond Hardin Roofing <estimates@raymondhardinsroofing.com>";

function clip(value: string | undefined, max: number): string {
  return (value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EstimateRequestPayload;

    const name = clip(body.name, 120);
    const phone = clip(body.phone, 40);
    const email = clip(body.email, 200);
    const city = clip(body.city, 80) || "Gilmer";
    const propertyType = clip(body.propertyType, 40) || "Residential";
    const roofService = clip(body.roofService, 80) || "General Roof Inquiry";
    const details = (body.details ?? "").trim().slice(0, 2000);

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Please provide both your name and phone number." },
        { status: 400 },
      );
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "Please enter a phone number we can call." },
        { status: 400 },
      );
    }

    if (email && !isEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address, or leave it blank." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      console.error("[estimate] RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Unable to send your request. Please call 903-797-2756." },
        { status: 500 },
      );
    }

    const to = process.env.ESTIMATE_TO_EMAIL?.trim() || COMPANY_INFO.email;
    const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "short",
    });

    const message = buildEstimateEmail({
      name,
      phone,
      email,
      city,
      propertyType,
      roofService,
      details,
      submittedAt,
    });

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email || undefined,
      subject: message.subject,
      html: message.html,
      text: message.text,
    });

    if (error) {
      console.error("[estimate] Resend rejected the message", error);
      return NextResponse.json(
        { error: "Unable to send your request. Please call 903-797-2756." },
        { status: 502 },
      );
    }

    console.info("[estimate] sent", { id: data?.id, city, roofService });

    if (email) {
      const confirmation = buildCustomerConfirmationEmail({
        name,
        phone,
        email,
        city,
        propertyType,
        roofService,
        details,
        submittedAt,
      });
      const confirmationResult = await resend.emails.send({
        from,
        to: [email],
        replyTo: COMPANY_INFO.email,
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
      });

      if (confirmationResult.error) {
        console.error(
          "[estimate] customer confirmation failed",
          confirmationResult.error,
        );
      } else {
        console.info("[estimate] confirmation sent", {
          id: confirmationResult.data?.id,
        });
      }
    }

    return NextResponse.json({
      ok: true,
      message: "Estimate request received.",
    });
  } catch (error) {
    console.error("[estimate] failed", error);
    return NextResponse.json(
      { error: "Unable to process request. Please call 903-797-2756." },
      { status: 500 },
    );
  }
}
