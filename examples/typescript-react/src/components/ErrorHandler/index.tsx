import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorHandlerProps {
  /**
   * The elements to try to render.
   */
  children: ReactNode;
}

interface State {
  /**
   * The error that was thrown.
   */
  error?: Error | null;

  /**
   * The React error information.
   */
  errorInfo?: ErrorInfo | null;
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
   * @param error The error that was thrown
   * @param errorInfo The React error information
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (error || errorInfo) {
      return (
        <>
          <h1 className="has-text-danger">{error?.name}</h1>
          <pre className="has-background-danger-light has-text-danger-dark">
            {error?.message}
            {errorInfo?.componentStack}
          </pre>
        </>
      );
    }

    return children;
  }
}
