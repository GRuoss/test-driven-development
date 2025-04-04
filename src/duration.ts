export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Duration cannot be negative");
  }

  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = Math.round(seconds % 60);

  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }

  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  let result = "";
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0 || hours > 0) {
    result += `${minutes}m`;
  }
  result += `${seconds}s`;

  return result;
}
