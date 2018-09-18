import React from 'react';
import classNames from 'classnames';

import './Button.css';

const Button = ({ className, styleType = 'primary', ...props }) => {
  return <button className={classNames('btn', className, `btn-${styleType}`)} {...props} />;
};

export default Button;
