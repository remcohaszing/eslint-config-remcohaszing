import { type VNode } from 'preact'

import { ErrorHandler } from '../ErrorHandler/index.js'
import { ItemList } from '../ItemList/index.js'

/**
 * The main entry point to the React app.
 */
export function App(): VNode {
  return (
    <ErrorHandler>
      <ItemList />
    </ErrorHandler>
  )
}
