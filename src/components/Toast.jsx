import React, { useEffect } from 'react';
import '../styles/Toast.css';

const Toast = ({
  id,
  type = 'success',
  message = 'demo message',
  handleClose,
  duration = 3000,
}) => {
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      handleClose(id);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [id, duration]);

  return (
    <div className={`toast-container ${type}`}>
      <span>{message}</span>
      <span style={{ cursor: 'pointer' }} onClick={() => handleClose(id)}>
        X
      </span>
    </div>
  );
};

export default Toast;
