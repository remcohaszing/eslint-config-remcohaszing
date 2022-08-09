#!/usr/bin/env node
import process from 'process';

import { addPromise } from './add.js';
import { substractPromise } from './substract.js';

/**
 * THe main CLI entry point.
 *
 * @param fn Tje mathematical function to apply.
 * @param x The first value parameter.
 * @param y The second value parameter.
 */
async function main(fn?: string, x?: string, y?: string): Promise<void> {
  let result: number;
  switch (fn) {
    case 'add':
      result = await addPromise(Number(x), Number(y));
      break;
    case 'substract':
      result = await substractPromise(Number(x), Number(y));
      break;
    default:
      throw new Error(`Unknown function name: ${fn}`);
  }
  // eslint-disable-next-line no-console
  console.log('Result:', result);
}

if (require.main === module) {
  main(...process.argv.slice(2)).catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  });
}
