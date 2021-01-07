import { VNode } from 'preact';

import { ErrorHandler } from '../ErrorHandler';
import { ItemList } from '../ItemList';

/**
 * The main entry point to the React app.
 */
export function App(): VNode {
  return (
    <ErrorHandler>
      <ItemList />
    </ErrorHandler>
  );
}
