import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ message, type }) => {
  return (
    <BootstrapAlert variant={type}>
      {message}
    </BootstrapAlert>
  );
};

export default Alert;
