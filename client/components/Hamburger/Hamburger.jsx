import React from 'react';
import styles from './Hamburger.module.css';

export default function Hamburger() {
  return (
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
            <li className={styles.navItemMobile}>Home</li>
          </a>
          <a href="#">
            <li className={styles.navItemMobile}>About</li>
          </a>
          <a href="#">
            <li className={styles.navItemMobile}>Sign Up</li>
          </a>
          <a href="#">
            <li className={styles.navItemMobile}>Sign In</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
