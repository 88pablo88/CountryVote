import { useEffect, useState } from 'react';

import { Snackbar } from '@components/index';

export const useSnackbar = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setMessage] = useState<string>('');

  const showSnackbarMessage = (message: string) => {
    setMessage(message);
    setShowSnackbar(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
      setShowSnackbar(false);
    }, 5000);
  }, [message]);

  const snackbar = showSnackbar ? (
    <Snackbar
      message={message}
      onClose={() => {
        setShowSnackbar(false);
      }}
    />
  ) : null;

  return { snackbar, showSnackbarMessage };
};
