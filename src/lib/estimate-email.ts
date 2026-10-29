import { COMPANY_INFO } from "@/data/company";

const LOGO_URL = "https://raymondhardinroofing.vercel.app/images/rhr-logo.jpg";

export interface EstimateEmailInput {
  name: string;
  phone: string;
  email: string;
  city: string;
  propertyType: string;
  roofService: string;
  details: string;
  submittedAt: string;
}

const NAVY = "#284078";
const INK = "#0e0e0e";
const MUTED = "#5c5c5c";
const SAND = "#f6f5f2";
const LINE = "#e7ebea";
const SOFT = "#e6ebf6";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `tel:${digits.length === 10 ? `+1${digits}` : `+${digits}`}`;
}

export function buildEstimateEmail(input: EstimateEmailInput) {
  const name = escapeHtml(input.name);
  const phone = escapeHtml(input.phone);
  const email = input.email ? escapeHtml(input.email) : "";
  const city = escapeHtml(input.city);
  const propertyType = escapeHtml(input.propertyType);
  const roofService = escapeHtml(input.roofService);
  const details = escapeHtml(input.details || "Not provided");
  const submittedAt = escapeHtml(input.submittedAt);
  const callHref = telHref(input.phone);
  const mailHref = input.email ? `mailto:${encodeURIComponent(input.email)}` : "";

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Phone", `<a href="${callHref}" style="color:${NAVY};text-decoration:none;">${phone}</a>`],
    ["Service", roofService],
    ["Property", propertyType],
    ["City", `${city}, TX`],
    [
      "Email",
      email
        ? `<a href="${mailHref}" style="color:${NAVY};text-decoration:none;">${email}</a>`
        : "Not provided",
    ],
    ["Submitted", submittedAt],
  ];

  const text = [
    "Raymond Hardin Roofing",
    "New free estimate request",
    "",
    `${input.name} requested a ${input.roofService} in ${input.city}, TX.`,
    "",
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Email: ${input.email || "Not provided"}`,
    `City: ${input.city}, TX`,
    `Property: ${input.propertyType}`,
    `Service: ${input.roofService}`,
    `Details: ${input.details || "Not provided"}`,
    `Submitted: ${input.submittedAt}`,
    "",
    `${COMPANY_INFO.phoneLabel}: ${COMPANY_INFO.phoneDisplay}`,
    `${COMPANY_INFO.phoneSecondaryLabel}: ${COMPANY_INFO.phoneSecondaryDisplay}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:${SAND};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SAND};margin:0;padding:0;">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:560px;background:#ffffff;border:1px solid ${LINE};">
            <tr>
              <td style="height:6px;background:${NAVY};font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:28px 32px 22px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 16px 0 0;vertical-align:middle;">
                      <img src="${LOGO_URL}" width="139" height="52" alt="Raymond Hardin Roofing" style="display:block;border:0;outline:none;text-decoration:none;width:139px;height:52px;" />
                    </td>
                    <td style="vertical-align:middle;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.15;font-weight:bold;letter-spacing:0.04em;text-transform:uppercase;color:${INK};">Raymond Hardin</p>
                      <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.2;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${NAVY};">Roofing · Est. ${COMPANY_INFO.foundedYear}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-top:1px solid ${LINE};font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:26px 32px 8px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.2;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${NAVY};">New request</p>
                <h1 style="margin:10px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.1;font-weight:normal;color:${INK};">${name}</h1>
                <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#3a3a3a;">Free estimate for a <strong style="color:${INK};">${roofService}</strong> in <strong style="color:${INK};">${city}, TX</strong>.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 6px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.2;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:${NAVY};">Call ${name}</p>
                      <p style="margin:6px 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.1;color:${INK};">${phone}</p>
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td bgcolor="${NAVY}" style="background:${NAVY};">
                            <a href="${callHref}" style="display:inline-block;padding:12px 18px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#ffffff;text-decoration:none;">Call now</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 8px;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.2;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:${MUTED};">Request details</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows
                    .map(
                      ([label, value]) => `
                  <tr>
                    <td style="width:110px;padding:11px 12px 11px 0;border-top:1px solid ${LINE};font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.4;color:${MUTED};vertical-align:top;">${label}</td>
                    <td style="padding:11px 0;border-top:1px solid ${LINE};font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.4;color:${INK};vertical-align:top;">${value}</td>
                  </tr>`,
                    )
                    .join("")}
                  <tr>
                    <td colspan="2" style="padding:14px 0 4px;border-top:1px solid ${LINE};font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.4;color:${MUTED};">Notes</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:${INK};white-space:pre-wrap;">${details}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SAND};">
                  <tr>
                    <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${MUTED};">
                      <strong style="color:${INK};">${COMPANY_INFO.name}</strong><br />
                      ${COMPANY_INFO.headquarters.city}, ${COMPANY_INFO.headquarters.state} · Licensed, bonded &amp; insured<br />
                      ${COMPANY_INFO.phoneLabel} ${COMPANY_INFO.phoneDisplay} · ${COMPANY_INFO.phoneSecondaryLabel} ${COMPANY_INFO.phoneSecondaryDisplay}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    subject: `Free estimate request — ${input.name} in ${input.city}`,
    html,
    text,
  };
}

export function buildCustomerConfirmationEmail(input: EstimateEmailInput) {
  const name = escapeHtml(input.name);
  const phone = escapeHtml(input.phone);
  const city = escapeHtml(input.city);
  const propertyType = escapeHtml(input.propertyType);
  const roofService = escapeHtml(input.roofService);
  const workHref = COMPANY_INFO.phoneHref;
  const cellHref = COMPANY_INFO.phoneSecondaryHref;

  const rows: Array<[string, string]> = [
    ["Service", roofService],
    ["Property", propertyType],
    ["City", `${city}, TX`],
    ["Phone", phone],
  ];

  const text = [
    `Thank you, ${input.name}.`,
    "",
    `We received your request for a free ${input.roofService} in ${input.city}, TX.`,
    `Someone from Raymond Hardin Roofing will contact you shortly at ${input.phone}.`,
    "",
    "Need us sooner?",
    `${COMPANY_INFO.phoneLabel}: ${COMPANY_INFO.phoneDisplay}`,
    `${COMPANY_INFO.phoneSecondaryLabel}: ${COMPANY_INFO.phoneSecondaryDisplay}`,
    "",
    `Service: ${input.roofService}`,
    `Property: ${input.propertyType}`,
    `City: ${input.city}, TX`,
    `Phone: ${input.phone}`,
    "",
    COMPANY_INFO.name,
    `${COMPANY_INFO.headquarters.city}, ${COMPANY_INFO.headquarters.state}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:${SAND};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SAND};margin:0;padding:0;">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:560px;background:#ffffff;border:1px solid ${LINE};">
            <tr>
              <td style="height:6px;background:${NAVY};font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:28px 32px 22px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 16px 0 0;vertical-align:middle;">
                      <img src="${LOGO_URL}" width="139" height="52" alt="Raymond Hardin Roofing" style="display:block;border:0;outline:none;text-decoration:none;width:139px;height:52px;" />
                    </td>
                    <td style="vertical-align:middle;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.15;font-weight:bold;letter-spacing:0.04em;text-transform:uppercase;color:${INK};">Raymond Hardin</p>
                      <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.2;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${NAVY};">Roofing · Est. ${COMPANY_INFO.foundedYear}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-top:1px solid ${LINE};font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:26px 32px 8px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.2;font-weight:bold;letter-spacing:0.16em;text-transform:uppercase;color:${NAVY};">Thank you</p>
                <h1 style="margin:10px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.1;font-weight:normal;color:${INK};">${name}</h1>
                <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.55;color:#3a3a3a;">We received your request for a free <strong style="color:${INK};">${roofService}</strong> in <strong style="color:${INK};">${city}, TX</strong>. Someone from our Gilmer crew will contact you shortly at <strong style="color:${INK};">${phone}</strong>.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 6px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.2;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:${NAVY};">Need us sooner?</p>
                      <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:${INK};">For a leak or storm damage, call us directly. We answer as quickly as we can, usually within 24 hours.</p>
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          <td bgcolor="${NAVY}" style="background:${NAVY};">
                            <a href="${workHref}" style="display:inline-block;padding:12px 18px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#ffffff;text-decoration:none;">Call ${COMPANY_INFO.phoneDisplay}</a>
                          </td>
                          <td style="width:10px;font-size:0;line-height:0;">&nbsp;</td>
                          <td style="border:1px solid ${NAVY};">
                            <a href="${cellHref}" style="display:inline-block;padding:11px 18px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:${NAVY};text-decoration:none;">Cell ${COMPANY_INFO.phoneSecondaryDisplay}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 8px;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.2;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:${MUTED};">What you sent us</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows
                    .map(
                      ([label, value]) => `
                  <tr>
                    <td style="width:110px;padding:11px 12px 11px 0;border-top:1px solid ${LINE};font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.4;color:${MUTED};vertical-align:top;">${label}</td>
                    <td style="padding:11px 0;border-top:1px solid ${LINE};font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.4;color:${INK};vertical-align:top;">${value}</td>
                  </tr>`,
                    )
                    .join("")}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SAND};">
                  <tr>
                    <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:${MUTED};">
                      <strong style="color:${INK};">${COMPANY_INFO.name}</strong><br />
                      ${COMPANY_INFO.headquarters.city}, ${COMPANY_INFO.headquarters.state} · Licensed, bonded &amp; insured<br />
                      ${COMPANY_INFO.phoneLabel} ${COMPANY_INFO.phoneDisplay} · ${COMPANY_INFO.phoneSecondaryLabel} ${COMPANY_INFO.phoneSecondaryDisplay}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    subject: `Thank you, ${input.name} — we received your estimate request`,
    html,
    text,
  };
}
