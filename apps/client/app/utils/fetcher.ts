type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: BodyInit | null;
  credentials?: RequestCredentials;
};
export async function fetcher<T>(
  url: string,
  options?: RequestOptions
): Promise<T> {
  const defaultOptions: RequestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const res = await fetch(url, mergedOptions);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return (await res.json()) as T;
}
