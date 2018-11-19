import React from 'react';
import classNames from 'classnames';
import './Button.css';

const Button = ({ className, styleType = 'primary', ...props }) => {
  return <button className={classNames('btn', `btn-outline-${styleType}`, className)} {...props} />;
};

export default Button;
