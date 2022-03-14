import React from 'react';
import PasswordIndicator from './PasswordIndicator';
import './PasswordField.scss';

const PasswordField = ({ value, onChange, score, ...props }) => {
  const passwordFieldProps = {
    className: 'password-field',
  };

  const passwordCheckerProps = {
    type: 'password',
    placeholder: 'Type Password',
    className: 'password-checker',
    onChange,
  };

  const passwordIndicatorProps = {
    score: !!value && score,
  };

  return (
    <div {...passwordFieldProps}>
      <input {...passwordCheckerProps} />
      <PasswordIndicator {...passwordIndicatorProps} />
    </div>
  );
};

export default PasswordField;
