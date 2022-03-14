import React, { useEffect, useState } from 'react';
import PasswordIndicator from './PasswordIndicator';
import './PasswordField.scss';

const PasswordField = ({ value, score, ...props }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [score]);

  const onChange = (e) => {
    setIsLoading(true);
    props.onChange(e);
  };

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
    className: ['show-hide-btn', isLoading ? 'loading' : ''].join(' '),
    onClick: () => !isLoading && setIsShowPassword(!isShowPassword),
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
