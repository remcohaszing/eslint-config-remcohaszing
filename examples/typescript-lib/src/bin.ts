#!/usr/bin/env node
import { addPromise } from './add.js';
import { substractPromise } from './substract.js';

const [, , fn, x, y] = process.argv;
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
