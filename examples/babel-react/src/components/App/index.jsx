import { ErrorHandler } from '../ErrorHandler/index.js';
import { ItemList } from '../ItemList/index.js';

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
