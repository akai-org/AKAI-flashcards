import React from 'react';
import { ReactComponent as Logo } from 'assets/vectors/Logo.svg';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import StyledNavbar from './Navbar.styled';

const Navbar = () => (
  <StyledNavbar className="navbar">
    <Logo className="navbar__logo" />
    <div className="navbar__auth-buttons">
      <Button className="navbar__signin-button">Sign in</Button>
      <Link to="/register">
        <Button className="navbar__register-button">Register</Button>
      </Link>
    </div>
  </StyledNavbar>
);

export default Navbar;
