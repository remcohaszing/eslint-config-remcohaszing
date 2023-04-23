import { type ReactElement, type ReactNode, useCallback, useState } from 'react';

import { Button } from '../Button/index.js';

/**
 * Render a button which, when clicked, cause a render error.
 */
export function ErrorButton(): ReactElement {
  const [ok, setOk] = useState(true);

  const onClick = useCallback(() => {
    // @ts-expect-error The value is deliberately set to undefined to crash the application.
    setOk();
  }, []);

  if (!ok) {
    return ok as ReactNode as ReactElement;
  }

  return (
    <Button className="is-danger" onClick={onClick}>
      Crash
    </Button>
  );
}
