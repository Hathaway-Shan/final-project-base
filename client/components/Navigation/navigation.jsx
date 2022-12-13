import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import styles from './navigation.module.css';
import Search from '../Search/Search';
// import linkStyles from '../link.module.css';

export default function Navigation() {
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
        {/* search component goes here*/}
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Login</a>
          </li>
          {/* <li className={styles.navItem}>
            <a href="#">Sign In</a>
          </li> */}
        </ul>
        <Hamburger />
      </nav>
    </header>
  );
}
