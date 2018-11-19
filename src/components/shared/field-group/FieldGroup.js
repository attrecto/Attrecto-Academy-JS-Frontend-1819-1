import React from 'react';
import classNames from 'classnames';

const FieldGroup = ({ className, label, componentClass = 'input', ...props }) => {
  return (
    <div className={classNames('form-group mb-3', className)}>
      <label>{label}</label>
      {componentClass === 'input' ? (
        <input type="text" className="form-control" {...props} />
      ) : null}
      {componentClass === 'textarea' ? <textarea className="form-control" {...props} /> : null}
    </div>
  );
};

export default FieldGroup;
