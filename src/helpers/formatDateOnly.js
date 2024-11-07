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
  "December"
];

export default function formatDateOnly(date) {
  const match = date.substring(0, 10).split("-");
  const year = match[0];
  const month = MONTHS[parseInt(match[1], 10) - 1];
  const day = parseInt(match[2], 10);

  return `${month} ${day}, ${year}`;
}
