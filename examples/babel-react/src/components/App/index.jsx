import React from 'react';

import { ErrorHandler } from '../ErrorHandler';
import { ItemList } from '../ItemList';

/**
 * The main entry point to the React app.
 */
export function App() {
  return (
    <ErrorHandler>
      <ItemList />
    </ErrorHandler>
  );
}
