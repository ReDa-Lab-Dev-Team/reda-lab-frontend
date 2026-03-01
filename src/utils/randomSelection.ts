// utils/randomSelection.ts

/**
 * Removes duplicates from an array based on a key
 * @param arr - The array to remove duplicates from
 * @param key - The key to use for duplicate detection (default: 'id')
 * @returns Array with unique items
 */
export const removeDuplicates = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T = "id",
): T[] => {
  return Array.from(new Map(arr.map((item) => [item[key], item])).values());
};

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param arr - The array to shuffle
 * @returns A new shuffled array
 */
export const shuffleArray = <T>(arr: T[]): T[] => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Gets random items from an array
 * @param arr - The source array
 * @param count - Number of random items to select
 * @param options - Configuration options
 * @returns Array of random items
 */
export const getRandomItems = <T extends Record<string, any>>(
  arr: T[],
  count: number,
  options?: {
    removeDuplicates?: boolean;
    uniqueKey?: string;
    allowDuplicates?: boolean;
  },
): T[] => {
  if (!arr.length) return [];

  let sourceArray: T[] = [...arr];

  // Remove duplicates if specified
  if (options?.removeDuplicates && options?.uniqueKey) {
    sourceArray = removeDuplicates(sourceArray, options.uniqueKey as keyof T);
  }

  // If count is greater than array length and we don't want duplicates
  if (count > sourceArray.length && !options?.allowDuplicates) {
    return shuffleArray(sourceArray);
  }

  // If we want to allow duplicates (like for sampling with replacement)
  if (options?.allowDuplicates) {
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * sourceArray.length);
      result.push(sourceArray[randomIndex]);
    }
    return result;
  }

  // Default: random selection without duplicates
  return shuffleArray(sourceArray).slice(0, count);
};

/**
 * Gets random items with a guarantee to be different from previous selection
 * @param arr - The source array
 * @param count - Number of random items to select
 * @param previousIds - Set of previously selected IDs
 * @param idKey - The key to use as ID (default: 'id')
 * @returns Object containing new selection and updated previous IDs
 */
export const getRandomItemsExcluding = <T extends Record<string, any>>(
  arr: T[],
  count: number,
  previousIds: Set<string | number>,
  idKey: keyof T = "id",
): { items: T[]; newPreviousIds: Set<string | number> } => {
  if (!arr.length) return { items: [], newPreviousIds: previousIds };

  // Remove duplicates from source
  const uniqueItems = removeDuplicates(arr, idKey);

  // Filter out previous items
  let availableItems = uniqueItems.filter(
    (item) => !previousIds.has(item[idKey]),
  );

  // If not enough available items, reset and use all
  if (availableItems.length < count) {
    availableItems = uniqueItems;
    previousIds.clear();
  }

  // Select random items
  const selected = shuffleArray(availableItems).slice(0, count);

  // Update previous IDs
  const newPreviousIds = new Set(selected.map((item) => item[idKey]));

  return { items: selected, newPreviousIds };
};

/**
 * Creates a random selector that maintains state
 * @returns Object with methods for random selection
 */
export const createRandomSelector = <T extends Record<string, any>>() => {
  let previousIds = new Set<string | number>();

  return {
    /**
     * Select random items from array
     */
    select: (arr: T[], count: number, idKey: keyof T = "id"): T[] => {
      const result = getRandomItemsExcluding(arr, count, previousIds, idKey);
      previousIds = result.newPreviousIds;
      return result.items;
    },

    /**
     * Reset the selector's memory
     */
    reset: () => {
      previousIds.clear();
    },

    /**
     * Get current previous IDs
     */
    getPreviousIds: () => new Set(previousIds),
  };
};
