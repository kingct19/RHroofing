import companyContent from "../content/company.json";

function telHref(display: string): string {
  return `tel:${display.trim()}`;
}

function phoneE164(display: string): string {
  const digits = display.replace(/\D/g, "");
  const local = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (local.length === 10) {
    return `+1-${local.slice(0, 3)}-${local.slice(3, 6)}-${local.slice(6)}`;
  }
  return display.startsWith("+") ? display : `+${digits}`;
}

export const COMPANY_INFO = {
  ...companyContent,
  yearsInBusiness: new Date().getFullYear() - companyContent.foundedYear,
  phoneHref: telHref(companyContent.phoneDisplay),
  phoneSecondaryHref: telHref(companyContent.phoneSecondaryDisplay),
  phoneE164: phoneE164(companyContent.phoneDisplay),
  phoneSecondaryE164: phoneE164(companyContent.phoneSecondaryDisplay),
  emailHref: `mailto:${companyContent.email}`,
};
