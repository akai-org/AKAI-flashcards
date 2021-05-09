import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useHandle from './useHandle';

const useAuth = () => {
  const history = useHistory();
  const userData = useSelector((state) => state);
  const handle = useHandle();

  useEffect(async () => {
    if (!userData?.uid) {
      handle('Not signed in', 'error');
      history.push('/');
    }
  });

  console.log(userData);
};

export default useAuth;
