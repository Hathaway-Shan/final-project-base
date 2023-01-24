import React from 'react';
import { signInUser } from '../../services/user-utils';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const existingUser = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    await signInUser(existingUser);
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSignIn}>
          <h1 className={styles.formTitle}>Sign Up</h1>
          <p className={styles.formDescription}>
            Users can pin jobs to their own boards, as well as save
            notes about them.
          </p>
          <div className={styles.formGroup}>
            <input
              name="email"
              type="text"
              className={styles.formInput}
              placeholder=""
              autoComplete="off"
            ></input>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              name="password"
              type="password"
              className={styles.formInput}
              placeholder=""
            ></input>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <button className={styles.formButton}>sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
