import { Callback } from './types';

/**
 * Add x and y synchronously.
 *
 * @param x The initial variable.
 * @param y The value to add to x.
 * @returns The sum of x and y.
 */
export function addSync(x: number, y: number): number {
  return x + y;
}

/**
 * Add x and y asynchronously.
 *
 * @param x The initial variable.
 * @param y The value to add to x.
 * @param cb The callback that will be called with the sum of x and y.
 */
export function addAsync(x: number, y: number, cb: Callback<number>): void {
  cb(null, x + y);
}

/**
 * Add x and y asynchronously.
 *
 * @param x The initial variable.
 * @param y The value to add to x.
 * @returns The sum of x and y wrapped in a promise.
 */
export async function addPromise(x: number, y: number): Promise<number> {
  const sum = await new Promise<number>((resolve) => {
    resolve(x + y);
  });
  return sum;
}
