import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  /**
   * The label to render for the input.
   */
  label: PropTypes.node.isRequired,

  /**
   * The name of the input field.
   *
   * This will also be used as the id.
   */
  name: PropTypes.string.isRequired,

  /**
   * The event handler to call when the input changes.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The input type.
   */
  type: PropTypes.oneOf(['text', 'url']),

  /**
   * The current value of the input.
   */
  value: PropTypes.string.isRequired,
};

/**
 * Render a Bulma styled input element.
 */
export function Input({ label, name, ...props }) {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input className="input" id={name} name={name} {...props} />
    </div>
  );
}

Input.propTypes = propTypes;
