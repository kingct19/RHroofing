import { NextResponse } from "next/server";

interface EstimateRequestPayload {
  name?: string;
  phone?: string;
  city?: string;
  propertyType?: string;
  roofService?: string;
  details?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EstimateRequestPayload;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const city = body.city?.trim() || "Gilmer";
    const propertyType = body.propertyType?.trim() || "Residential";
    const roofService = body.roofService?.trim() || "General Roof Inquiry";
    const details = body.details?.trim() || "";

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Please provide both your name and phone number." },
        { status: 400 }
      );
    }

    // Structured lead log ready for webhook / email / CRM forwarding
    console.info("[Raymond Hardin Roofing Lead]", {
      timestamp: new Date().toISOString(),
      name,
      phone,
      city,
      propertyType,
      roofService,
      details,
    });

    return NextResponse.json({
      ok: true,
      message: "Estimate request received.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request. Please call 903-797-2756." },
      { status: 500 }
    );
  }
}
