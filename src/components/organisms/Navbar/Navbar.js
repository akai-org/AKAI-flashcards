import React, { useState } from 'react';
import { ReactComponent as Logo } from 'assets/vectors/Logo.svg';
import { Link } from 'react-router-dom';
import useHandle from 'hooks/useHandle';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { signOut } from 'firebase/config/auth';
import StyledNavbar from './Navbar.styled';
import LoginForm from '../LoginForm/LoginForm';

const Navbar = () => {
  const [isLoginPanelVisible, changeLoginPanelVisibility] = useState(false);
  const handle = useHandle();
  const userData = useSelector((state) => state?.userData);
  const dispatch = useDispatch();

  const handleSignOutButtonClick = async () => {
    try {
      const isSignedOut = await signOut();
      if (isSignedOut) {
        changeLoginPanelVisibility(false);
        dispatch({ type: 'SIGN_OUT' });
        handle('successfuly signed out', 'success');
      }
    } catch (error) {
      handle(error, 'error');
    }
  };

  return (
    <StyledNavbar className="navbar">
      <Link to="/">
        <Logo className="navbar__logo" />
      </Link>
      <div className="navbar__auth-buttons">
        {!userData?.uid && (
          <>
            <Button
              className="navbar__signin-button"
              onClick={() => {
                changeLoginPanelVisibility(!isLoginPanelVisible);
              }}
            >
              Sign in
            </Button>
            <LoginForm isLoginPanelVisible={isLoginPanelVisible} />
            <Link to="/register">
              <Button className="navbar__register-button">Register</Button>
            </Link>
          </>
        )}
        {userData?.uid && (
          <Button onClick={handleSignOutButtonClick} className="navbar__signout-button">
            Sign out
          </Button>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
