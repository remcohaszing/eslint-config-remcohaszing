import { addAsync, addPromise, addSync } from './add';
import type { Callback } from './types';

/**
 * Substract y from x synchronously.
 *
 * @param x - The initial variable.
 * @param y - The value to substract from x.
 * @returns The difference between x and y.
 */
export function substractSync(x: number, y: number): number {
  return addSync(x, -y);
}

/**
 * Substract y from x asynchronously.
 *
 * @param x - The initial variable.
 * @param y - The value to substract from x.
 * @param cb - The callback that will be called with the difference between x and y.
 */
export function substractAsync(x: number, y: number, cb: Callback<number>): void {
  addAsync(x, -y, (error, result) => {
    if (error) {
      cb(error);
      return;
    }
    cb(null, result);
  });
}

/**
 * Substract y from x asynchronously.
 *
 * @param x - The initial variable.
 * @param y - The value to substract from x.
 * @returns The difference between x and y wrapped in a promise.
 */
export async function substractPromise(x: number, y: number): Promise<number> {
  const sum = await addPromise(x, -y);
  return sum;
}
