// utils/string.ts
/**
 * Capitalizes first letter of a string
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Truncates string with ellipsis
 */
export function truncateByCharactersWithElipsis(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Truncates string with ellipsis
 */
export function cutStringByCharacters(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Converts string to slug format
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncatePreserveWords(
  text: string,
  maxLength: number,
  ellipsis: string = '...'
): string {
  if (text.length <= maxLength) {
    return text;
  }

  const words = text.split(' ');
  let result = '';
  
  for (const word of words) {
    // Check if adding the next word would exceed the limit
    const potentialResult = result ? `${result} ${word}` : word;
    
    if (potentialResult.length + ellipsis.length > maxLength) {
      // If we have at least one word, add ellipsis
      if (result) {
        return result + ellipsis;
      }
      // If even the first word is too long, truncate it
      return word.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
    
    result = potentialResult;
  }
  
  return result;
}

export function truncateByWords(
  text: string, 
  wordLimit: number, 
  ellipsis: string = '...'
): string {
  // Handle empty or invalid input
  if (!text || wordLimit <= 0) {
    return '';
  }

  // Split the text into words (split by whitespace)
  const words = text.trim().split(/\s+/);
  
  // If the text has fewer words than the limit, return it as is
  if (words.length <= wordLimit) {
    return text;
  }
  
  // Take the first 'wordLimit' words and join them
  const truncatedWords = words.slice(0, wordLimit).join(' ');
  
  // Add ellipsis
  return truncatedWords + ellipsis;
}

// --- Word Counter ---
export const countWords = (s: string) => s.trim().split(/\s+/).length;