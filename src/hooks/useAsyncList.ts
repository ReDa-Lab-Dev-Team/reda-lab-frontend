import { useEffect, useRef, useState } from "react";

interface UseAsyncListOptions<TInput, TOutput> {
  fetcher: () => Promise<TInput[]>;
  mapper?: (rawData: any) => TOutput;
  deppendencies?: any[];
  initialData?: TOutput[];
}

export function useAsyncList<TOutput, TInput = TOutput>({
  fetcher,
  mapper = (x) => x as unknown as TOutput,
  deppendencies = [],
  initialData = [],
}: UseAsyncListOptions<TInput, TOutput>) {
  const [data, setData] = useState<TOutput[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const mounted = useRef(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const rawData = await fetcher();

        if (!mounted) return;

        const mappedData = rawData
          ? rawData.map((item) => mapper(item))
          : (rawData as unknown as TOutput[]);

        setData(mappedData);
      } catch (err) {
        if (!mounted) return;
        setError(err);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    load();

    return () => {
      mounted.current = false;
    };
  }, [fetcher, mapper, ...deppendencies]);
  return {
    data,
    loading,
    error,
  };
}
