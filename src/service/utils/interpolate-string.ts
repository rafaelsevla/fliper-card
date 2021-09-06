
export default function interpolateString (text: string, key: string, newText: string) {
  if (!text) return text;
  const parts = text.split(`<${key}>`);
  if (parts.length === 1) return parts[0];

  return `${parts[0]}${newText}${parts[1]}`;
}
