import { Component, ComponentChild, ComponentChildren, Fragment, h } from 'preact';

interface ErrorHandlerProps {
  /**
   * The elements to try to render.
   */
  children: ComponentChildren;
}

interface State {
  /**
   * The error that was thrown.
   */
  error?: null | Error;

  /**
   * The React error information.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorInfo?: any;
}

/**
 * Render children, and render a stack trace if an error occurs while rendering.
 */
export class ErrorHandler extends Component<ErrorHandlerProps, State> {
  static defaultProps = {};

  state: State = {
    error: null,
    errorInfo: null,
  };

  /**
   * Handle an error thrown caused by a component on the React tree.
   *
   * @param error - The error that was thrown
   * @param errorInfo - The React error information
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentDidCatch(error: Error, errorInfo: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.setState({ error, errorInfo });
  }

  render(): ComponentChild {
    const { children } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { error, errorInfo } = this.state;

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (error || errorInfo) {
      return (
        <Fragment>
          <h1 className="has-text-danger">{error?.name}</h1>
          <pre className="has-background-danger-light has-text-danger-dark">
            {error?.message}
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            {errorInfo?.componentStack}
          </pre>
        </Fragment>
      );
    }

    return children;
  }
}
