import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import useHandle from './useHandle';

const useProtectedRoute = () => {
  const history = useHistory();
  const handle = useHandle();
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        handle('Access to protected route denied', 'error');
        history.push('/');
      } else {
        console.log(user);
        dispatch({ type: 'AUTHENTICATE_USER', payload: user });
      }
    });
  }, [history]);
};

export default useProtectedRoute;
