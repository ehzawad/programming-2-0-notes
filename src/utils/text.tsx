export function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function highlightText(value: string, query: string) {
  if (!query.trim()) return value;

  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(${escaped})`, "ig");
  const pieces = value.split(pattern);

  return pieces.map((piece, index) => {
    if (piece.toLowerCase() === query.trim().toLowerCase()) {
      return <mark key={`${piece}-${index}`}>{piece}</mark>;
    }
    return piece;
  });
}
