import { type VNode } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { Button } from '../Button/index.js'

/**
 * Render a button which, when clicked, cause a render error.
 */
export function ErrorButton(): VNode {
  const [ok, setOk] = useState(true)

  const onClick = useCallback(() => {
    // @ts-expect-error The value is deliberately set to undefined to crash the application.
    setOk()
  }, [])

  if (!ok) {
    throw new Error('fail')
  }

  return (
    <Button className="is-danger" onClick={onClick}>
      Crash
    </Button>
  )
}
