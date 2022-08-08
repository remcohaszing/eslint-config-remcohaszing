import { useCallback, useState } from 'react';

import { Button } from '../Button/index.js';

/**
 * Render a button which, when clicked, cause a render error.
 */
export function ErrorButton() {
  const [ok, setOk] = useState(true);

  const onClick = useCallback(() => {
    setOk();
  }, []);

  if (!ok) {
    return;
  }

  return (
    <Button className="is-danger" onClick={onClick}>
      Crash
    </Button>
  );
}
