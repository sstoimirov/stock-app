import { JSX } from 'react';

/**
 * Auto-infer loaderData type for component props
 */
export type WithLoaderData<T extends { loaderData?: unknown }, D> = Omit<
  T,
  'loaderData'
> & {
  loaderData: D;
};

/**
 * Optional HOC wrapper for components
 */
export function withLoader<T extends { loaderData?: unknown }, D>(
  component: (props: WithLoaderData<T, D>) => JSX.Element
) {
  return component;
}
