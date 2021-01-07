import classNames from 'classnames';
import { ComponentPropsWithoutRef, ReactElement } from 'react';

/**
 * Render a Bylma styled button element.
 */
export function Button({ className, ...props }: ComponentPropsWithoutRef<'button'>): ReactElement {
  return <button className={classNames('button', className)} type="button" {...props} />;
}
