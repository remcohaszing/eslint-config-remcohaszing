import { ComponentChild, JSX, VNode } from 'preact';

interface InputProps {
  /**
   * The label to render for the input.
   */
  label: ComponentChild;

  /**
   * The name of the input field.
   *
   * This will also be used as the id.
   */
  name: string;

  /**
   * The event handler to call when the input changes.
   */
  onChange: JSX.GenericEventHandler<HTMLInputElement>;

  /**
   * The input type.
   */
  type?: 'text' | 'url';

  /**
   * The current value of the input.
   */
  value: string;
}

/**
 * Render a Bulma styled input element.
 */
export function Input({ label, name, ...props }: InputProps): VNode {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input className="input" id={name} name={name} {...props} />
    </div>
  );
}
