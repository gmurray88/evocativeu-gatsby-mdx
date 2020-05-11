import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({
  onClick,
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  secondary = false,
  ...rest
}) => {
  const handleClick = event => {
    if (typeof onClick === 'function' && !disabled) {
      onClick(event);
    }
  };

  const fullWidthClass = fullWidth ? classes.fullWidth : '';
  const secondaryClass = secondary ? classes.secondary : '';
  const classNames = `${
    classes.button
  } ${fullWidthClass} ${secondaryClass} ${className}`;

  return (
    <div onClick={handleClick} role="button" className={classNames} {...rest}>
      {children}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
};

export default Button;
