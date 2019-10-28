export function pluralize(
  entry: { zero: string; one: string; other: string },
  count: number
) {
  let key: "zero" | "one" | "other";

  if (count === 0 && entry.zero) {
    key = "zero";
  } else if (count === 1) {
    key = "one";
  } else {
    key = "other";
  }

  return entry[key].replace("{count}", count.toString());
}
