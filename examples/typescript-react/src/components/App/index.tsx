import { type ReactElement } from 'react'

import { ErrorHandler } from '../ErrorHandler/index.js'
import { ItemList } from '../ItemList/index.js'

/**
 * The main entry point to the React app.
 */
export function App(): ReactElement {
  return (
    <ErrorHandler>
      <ItemList />
    </ErrorHandler>
  )
}
