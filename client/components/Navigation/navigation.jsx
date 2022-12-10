import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
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
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Sign Up</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Sign In</a>
          </li>
        </ul>
        <div role={styles.navigation}>
          <div id={styles.menuToggle}>
            {/* A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it. */}

            <input type="checkbox" />

            {/* Some spans to act as a hamburger. */}

            <span></span>
            <span></span>
            <span></span>

            <ul id={styles.menu}>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Sign Up</li>
              </a>
              <a href="#">
                <li>Sign In</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
