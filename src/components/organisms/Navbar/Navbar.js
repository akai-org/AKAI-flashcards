import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from 'assets/vectors/Logo.svg';
import { Link } from 'react-router-dom';
import useHandle from 'hooks/useHandle';
import { useSelector, useDispatch } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';
import Button from 'components/atoms/Button/Button';
import { signOut } from 'firebase/config/auth';
import StyledNavbar from './Navbar.styled';
import LoginForm from '../LoginForm/LoginForm';

const Navbar = () => {
  const [isLoginPanelVisible, changeLoginPanelVisibility] = useState(false);
  const [isScrolledTop, changeScrollStatement] = useState(true);
  const handle = useHandle();
  const userData = useSelector((state) => state?.userData);
  const dispatch = useDispatch();

  const handleScroll = (e) => {
    const { scrollTop } = e.target.scrollingElement;
    console.log(scrollTop);
    console.dir(e);

    if (scrollTop === 0) {
      changeScrollStatement(true);
    } else {
      changeScrollStatement(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scrol', handleScroll);
    };
  });

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
    <StyledNavbar className="navbar" isScrolledTop={isScrolledTop}>
      <Link to="/">
        <Logo className="navbar__logo" />
      </Link>
      {/* <div className="navbar__menu"> */}
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
            <LoginForm
              isLoginPanelVisible={isLoginPanelVisible}
              setLoginVisible={changeLoginPanelVisibility}
            />
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
        {/* </div> */}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
