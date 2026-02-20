// sharply truncates text
export const textTruncation = (
  text: string,
  maxLength: number,
  ellipse: string = "...",
): string => {
  if (!text || text.length <= maxLength) return text;

  return text.slice(0, maxLength) + ellipse;
};

// truncates text at the nearest word boundary
export const truncateAtWordBoundary = (
  text: string,
  maxLength: number,
  ellipsis: string = "...",
): string => {
  if (!text || text.length <= maxLength) return text;

  // Find the last space within the maxLength
  const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

  // If no space found, truncate at maxLength
  if (lastSpaceIndex === -1) {
    return text.slice(0, maxLength) + ellipsis;
  }

  // Truncate from the last space
  return text.slice(0, lastSpaceIndex) + ellipsis;
};
