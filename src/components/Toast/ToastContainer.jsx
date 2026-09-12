import React, { useState } from 'react';
import Toast from './Toast';
const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const handleClose = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showToast = (toastType, toastMessage = 'demo message') => {
    const toastId = Date.now();

    setToasts((prev) => {
      return [...prev, { id: toastId, type: toastType, message: toastMessage }];
    });
  };

  return (
    <>
      <div>
        <button onClick={() => showToast('success', 'demo success message')}>
          Success
        </button>
        <button onClick={() => showToast('warning')}>Warning</button>
        <button onClick={() => showToast('error')}>Error</button>
        <button onClick={() => showToast('info')}>Info</button>
      </div>

      <div style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            handleClose={handleClose}
          />
        ))}
      </div>
    </>
  );
};

export default ToastContainer;
