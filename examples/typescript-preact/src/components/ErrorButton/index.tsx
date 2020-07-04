import { ComponentChild, VNode, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { Button } from '../Button';

/**
 * Render a button which, when clicked, cause a render error.
 */
export function ErrorButton(): VNode {
  const [ok, setOk] = useState(true);

  const onClick = useCallback(() => {
    // @ts-expect-error The value is deliberately set to undefined to crash the application.
    setOk();
  }, []);

  if (!ok) {
    return (ok as ComponentChild) as VNode;
  }

  return (
    <Button className="is-danger" onClick={onClick}>
      Crash
    </Button>
  );
}
