import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import {
  getRandomItems,
  getRandomItemsExcluding,
  removeDuplicates,
} from "../utils/randomSelection";

interface UseRandomSelectionOptions<T> {
  initialCount?: number;
  autoRefresh?: boolean;
  refreshInterval?: number;
  avoidDuplicates?: boolean;
  uniqueKey?: keyof T;
  removeSourceDuplicates?: boolean;
}

export const useRandomSelection = <T extends Record<string, any>>(
  items: T[],
  options: UseRandomSelectionOptions<T> = {},
) => {
  const {
    initialCount = 5,
    autoRefresh = false,
    refreshInterval = 30000, // 30 seconds
    avoidDuplicates = false,
    uniqueKey = "id" as keyof T,
    removeSourceDuplicates = true,
  } = options;

  // Process source items
  const sourceItems = useMemo(() => {
    if (removeSourceDuplicates) {
      return removeDuplicates(items, uniqueKey);
    }
    return items;
  }, [items, removeSourceDuplicates, uniqueKey]);

  // State
  const [selectedItems, setSelectedItems] = useState<T[]>(() =>
    getRandomItems(sourceItems, initialCount, { removeDuplicates: false }),
  );

  const previousIdsRef = useRef<Set<string | number>>(new Set());
  const timerRef = useRef<number | null>(null);

  // Refresh function
  const refresh = useCallback(() => {
    if (avoidDuplicates) {
      const result = getRandomItemsExcluding(
        sourceItems,
        initialCount,
        previousIdsRef.current,
        uniqueKey,
      );
      setSelectedItems(result.items);
      previousIdsRef.current = result.newPreviousIds;
    } else {
      setSelectedItems(getRandomItems(sourceItems, initialCount));
    }
  }, [sourceItems, initialCount, avoidDuplicates, uniqueKey]);

  // Auto-refresh setup
  // ...existing code...

  useEffect(() => {
    if (autoRefresh) {
      timerRef.current = window.setInterval(refresh, refreshInterval);
      return () => {
        if (timerRef.current !== null) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      };
    }
    // Cleanup if autoRefresh is turned off
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoRefresh, refresh, refreshInterval]);

  // Reset function
  const reset = useCallback(() => {
    previousIdsRef.current.clear();
    refresh();
  }, [refresh]);

  return {
    selectedItems,
    refresh,
    reset,
    hasItems: selectedItems.length > 0,
    totalSourceItems: sourceItems.length,
  };
};
