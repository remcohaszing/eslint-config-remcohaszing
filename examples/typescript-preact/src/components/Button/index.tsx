import classNames from 'classnames';
import { h, VNode } from 'preact';

/**
 * Render a Bylma styled button element.
 */
export function Button({ className, ...props }: h.JSX.IntrinsicElements['button']): VNode {
  return <button className={classNames('button', className)} type="button" {...props} />;
}
