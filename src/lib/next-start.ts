// "Next start" is always one calendar month ahead in America/New_York,
// floored at January 2027 (the earliest start Guru committed to).
const TIME_ZONE = "America/New_York";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const FLOOR_YEAR = 2027;
const FLOOR_MONTH = 1; // January, 1-indexed

function easternYearMonth(now: Date): { year: number; month: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "numeric",
  }).formatToParts(now);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  return { year, month };
}

export function getNextStartMonth(now: Date = new Date()): string {
  const { year, month } = easternYearMonth(now);
  let nextMonth = month + 1;
  let nextYear = year;
  if (nextMonth > 12) {
    nextMonth = 1;
    nextYear += 1;
  }

  if (nextYear < FLOOR_YEAR || (nextYear === FLOOR_YEAR && nextMonth < FLOOR_MONTH)) {
    return "January 2027";
  }

  return `${MONTHS[nextMonth - 1]} ${nextYear}`;
}

export function getNextStartLabel(now: Date = new Date()): string {
  return `Next start: ${getNextStartMonth(now)}`;
}

export const NEXT_START_FALLBACK = "Next start: January 2027";
