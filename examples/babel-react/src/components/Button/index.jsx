import classNames from 'classnames'
import PropTypes from 'prop-types'

const propTypes = {
  /**
   * An additional class to apply on the button.
   */
  className: PropTypes.string
}

/**
 * Render a Bylma styled button element.
 */
export function Button({ className, ...props }) {
  return <button className={classNames('button', className)} type="button" {...props} />
}

Button.propTypes = propTypes
