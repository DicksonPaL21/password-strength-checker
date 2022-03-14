import React, { useState } from 'react';
import PasswordIndicator from './PasswordIndicator';
import './PasswordField.scss';

const PasswordField = ({ value, onChange, score, ...props }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const passwordFieldProps = {
    className: 'password-field',
  };

  const passwordCheckerProps = {
    type: !isShowPassword ? 'password' : 'text',
    placeholder: 'Type Password',
    className: 'password-checker',
    onChange,
  };

  const passwordIndicatorProps = {
    score: !!value && score,
  };

  const btnProps = {
    className: 'show-hide-btn',
    onClick: () => setIsShowPassword(!isShowPassword),
  };

  return (
    <div {...passwordFieldProps}>
      <input {...passwordCheckerProps} />
      <span {...btnProps}>{!isShowPassword ? 'Show' : 'Hide'}</span>
      <PasswordIndicator {...passwordIndicatorProps} />
    </div>
  );
};

export default PasswordField;
