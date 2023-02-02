import React, { useState } from 'react';
import styles from './Hamburger.module.css';
import { signOutUser } from '../../services/user-utils';
import { useUser } from '../../context/userContext';

export default function Hamburger() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState('closed');
  const { user } = useUser();

  function toggleOpacityLayer() {
    if (mobileMenuOpen === 'closed') {
      setMobileMenuOpen('open');
    } else if (mobileMenuOpen === 'open') {
      setMobileMenuOpen('closed');
    }
  }
  return (
    <div role={styles.navigation}>
      <div id={styles.menuToggle}>
        {/* A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it. */}
        {mobileMenuOpen === 'open' && (
          <div className={styles.opacityLayer} />
        )}
        <input type="checkbox" onClick={toggleOpacityLayer} />

        {/* Some spans to act as a hamburger. */}

        <span></span>
        <span></span>
        <span></span>

        <ul id={styles.menu}>
          <a className={styles.navLinkMobile} href="/">
            <li className={styles.navItemMobile}>Home</li>
          </a>
          <a className={styles.navLinkMobile} href="/about">
            <li className={styles.navItemMobile}>About</li>
          </a>
          {!user && (
            <a className={styles.navItem} href="/auth/sign-up">
              <li className={styles.navItemMobile}>Login</li>
            </a>
          )}
          {user && (
            <a className={styles.navLinkMobile} href="/">
              <li
                className={styles.navItemMobile}
                onClick={signOutUser}
              >
                Log out
              </li>
            </a>
          )}
        </ul>
      </div>
    </div>
  );
}
