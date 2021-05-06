import { useContext } from 'react';
import { SnackbarContext } from 'context/snackbar';

const useHandle = () => {
  const context = useContext(SnackbarContext);

  const handle = (text, type = 'info') => {
    context.addNotification({ text, type });
  };

  return handle;
};

export default useHandle;
