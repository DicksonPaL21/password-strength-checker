import { req } from 'react-reqq';

export const passwordStrength = (payload, onSuccess) => {
  req.post({
    key: 'password',
    url: '/staging/password/strength',
    payload,
    onSuccess,
  });
};
