import { Component, type ComponentChild, type ComponentChildren } from 'preact'

interface ErrorHandlerProps {
  /**
   * The elements to try to render.
   */
  readonly children: ComponentChildren
}

interface State {
  /**
   * The error that was thrown.
   */
  error?: Error | null
}

/**
 * Render children, and render a stack trace if an error occurs while rendering.
 */
export class ErrorHandler extends Component<ErrorHandlerProps, State> {
  static defaultProps = {}

  state: State = {
    error: null
  }

  /**
   * Handle an error thrown caused by a component on the React tree.
   *
   * @param error The error that was thrown
   */
  componentDidCatch(error: Error): undefined {
    this.setState({ error })
  }

  render(): ComponentChild {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      return (
        <>
          <h1 className="has-text-danger">{error instanceof Error ? error.name : 'Error'}</h1>
          <pre className="has-background-danger-light has-text-danger-dark">
            {error instanceof Error ? error.message : JSON.stringify(error, undefined, 2)}
          </pre>
        </>
      )
    }

    return children
  }
}
