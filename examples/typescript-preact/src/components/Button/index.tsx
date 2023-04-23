import classNames from 'classnames';
import { type ComponentProps, type VNode } from 'preact';

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * An optional class name for the button.
   */
  className?: string;
}

/**
 * Render a Bylma styled button element.
 */
export function Button({ className, ...props }: ButtonProps): VNode {
  return <button className={classNames('button', className)} type="button" {...props} />;
}
