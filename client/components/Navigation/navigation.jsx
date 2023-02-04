import { NavLink, useLocation } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import styles from './navigation.module.css';
import Search from '../SearchBar/SearchBar';
import { useUser } from '../../context/userContext';
import { signOutUser } from '../../services/user-utils';
import { useState } from 'react';

export default function Navigation() {
  const { user, setUser } = useUser();
  let location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/">
          <img
            className={styles.navLogoImage}
            src="/images/Logo.png"
          />
        </a>
        <p className={styles.navLogoText}>Jr. Job Board</p>
        {location.pathname === '/' && <Search />}
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about">About</a>
          </li>
          {!user && (
            <li className={styles.navItem}>
              <a href="/auth/sign-up">Login</a>
            </li>
          )}
          {user && (
            <li className={styles.navItem}>
              <a href="/" onClick={signOutUser}>
                Log out
              </a>
            </li>
          )}
        </ul>
        <Hamburger />
      </nav>
    </header>
  );
}
