import React, { useState } from 'react';
import { ReactComponent as Logo } from 'assets/vectors/Logo.svg';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import StyledNavbar from './Navbar.styled';
import LoginForm from '../LoginForm/LoginForm';

const Navbar = () => {
  const [isLoginPanelVisible, changeLoginPanelVisibility] = useState(false);

  return (
    <StyledNavbar className="navbar">
      <Link to="/">
        <Logo className="navbar__logo" />
      </Link>
      <div className="navbar__auth-buttons">
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
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
