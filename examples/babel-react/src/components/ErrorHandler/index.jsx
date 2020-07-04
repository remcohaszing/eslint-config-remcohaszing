import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Render children, and render a stack trace if an error occurs while rendering.
 */
export class ErrorHandler extends Component {
  static propTypes = {
    /**
     * The elements to try to render.
     */
    children: PropTypes.node.isRequired,
  };

  state = {
    error: null,
    errorInfo: null,
  };

  /**
   * Handle an error thrown caused by a component on the React tree.
   *
   * @param {Error} error - The error that was thrown
   * @param {object} errorInfo - The React error information
   */
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
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
