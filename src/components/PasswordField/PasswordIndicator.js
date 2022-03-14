import React from 'react';
import './PasswordIndicator.scss';

const Bar = ({ className, ...props }) => {
  const barProps = {
    className: ['bar', className].join(' '),
  };

  return <span {...barProps} />;
};

const PasswordIndicator = ({ score, ...props }) => {
  const passwordIndicatorProps = {
    className: 'password-indicator',
  };

  return (
    <div {...passwordIndicatorProps}>
      {[...Array(5)].map((_, idx) => (
        <Bar
          key={idx}
          className={score !== false && idx <= score ? 'colored' : ''}
        />
      ))}
    </div>
  );
};

export default PasswordIndicator;
