import { type ComponentChild, type JSX, type VNode } from 'preact'

interface InputProps {
  /**
   * The label to render for the input.
   */
  readonly label: ComponentChild

  /**
   * The name of the input field.
   *
   * This will also be used as the id.
   */
  readonly name: string

  /**
   * The event handler to call when the input changes.
   */
  readonly onChange: JSX.GenericEventHandler<HTMLInputElement>

  /**
   * The input type.
   */
  readonly type?: 'text' | 'url'

  /**
   * The current value of the input.
   */
  readonly value: string
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
  )
}
