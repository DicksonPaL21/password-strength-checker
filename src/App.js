import React, { useEffect, useState } from 'react';
import PasswordField from './components/PasswordField';
import { useDebouncedEffect, actions } from './components/Helpers';
import './App.scss';

const indicator = ['very weak', 'weak', 'medium', 'strong', 'very strong'];

function App({ ...props }) {
  const [password, setpassword] = useState();
  const [passwordInfo, setPasswordInfo] = useState(null);

  useEffect(() => {
    if (!password) {
      setPasswordInfo(null);
    }
  }, [password]);

  useDebouncedEffect(
    () => {
      if (password !== undefined) {
        const payload = { password };
        const onSuccess = (data) => setPasswordInfo(data.response);
        actions.passwordStrength(payload, onSuccess);
      }
    },
    500,
    [password]
  );

  const passwordFieldProps = {
    value: password,
    onChange: (e) => setpassword(e.target.value),
    score: passwordInfo?.score ?? 0,
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Is your password strong enough?</h1>
        <PasswordField {...passwordFieldProps} />
        {!!password && !!passwordInfo && (
          <>
            <h2>{indicator[passwordInfo.score]}</h2>
            <p className="guess">
              {[passwordInfo?.guessTimeString, passwordInfo?.warning].join(
                '. '
              )}
            </p>
            {passwordInfo?.suggestions && (
              <p className="suggestions">
                {[...passwordInfo.suggestions].join(' ')}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
