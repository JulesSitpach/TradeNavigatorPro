// Formatting utilities for the application

export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(
  value: number,
  locale: string = "en-US",
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(value);
}

export function formatPercentage(
  value: number,
  locale: string = "en-US",
  decimals: number = 1,
): string {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);
}

export function formatDate(
  date: Date | string,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions,
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  }).format(dateObj);
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function formatHtsCode(code: string): string {
  // Format HTS code with dots for readability
  // Example: 8471600000 -> 8471.60.0000
  if (code.length === 10) {
    return `${code.slice(0, 4)}.${code.slice(4, 6)}.${code.slice(6)}`;
  }
  return code;
}

export function formatPhoneNumber(
  phone: string,
  country: string = "US",
): string {
  // Basic phone number formatting
  const cleaned = phone.replace(/\D/g, "");

  if (country === "US" && cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  return phone;
}

export function formatWeight(weight: number, unit: string = "kg"): string {
  return `${formatNumber(weight)} ${unit}`;
}

export function formatDuration(days: number): string {
  if (days < 7) {
    return `${days} day${days !== 1 ? "s" : ""}`;
  } else if (days < 30) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    let result = `${weeks} week${weeks !== 1 ? "s" : ""}`;
    if (remainingDays > 0) {
      result += ` ${remainingDays} day${remainingDays !== 1 ? "s" : ""}`;
    }
    return result;
  } else {
    const months = Math.floor(days / 30);
    const remainingDays = days % 30;
    let result = `${months} month${months !== 1 ? "s" : ""}`;
    if (remainingDays > 0) {
      result += ` ${remainingDays} day${remainingDays !== 1 ? "s" : ""}`;
    }
    return result;
  }
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

export function formatCountryName(countryCode: string): string {
  const countryNames: Record<string, string> = {
    US: "United States",
    CN: "China",
    MX: "Mexico",
    CA: "Canada",
    DE: "Germany",
    JP: "Japan",
    KR: "South Korea",
    TW: "Taiwan",
    VN: "Vietnam",
    IN: "India",
    TH: "Thailand",
    MY: "Malaysia",
    SG: "Singapore",
    ID: "Indonesia",
    PH: "Philippines",
    BR: "Brazil",
    IT: "Italy",
    FR: "France",
    GB: "United Kingdom",
    TR: "Turkey",
  };

  return countryNames[countryCode] || countryCode;
}
