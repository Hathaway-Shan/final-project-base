import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import styles from './navigation.module.css';
import Search from '../SearchBar/SearchBar';
import { useUser } from '../../context/userContext';
import { signOutUser } from '../../services/user-utils';

export default function Navigation() {
  const { user, setUser } = useUser();
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
        <Search placeholder={'search jobs here...'} />
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
