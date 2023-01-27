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
            Already have an account?{' '}
            <a href="/auth/signin">Sign In</a> here!
          </p>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              name="email"
              type="text"
              className={styles.formInput}
              placeholder=""
              autoComplete="off"
            ></input>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <input
              name="password"
              type="password"
              className={styles.formInput}
              placeholder=""
            ></input>
            <a className={styles.formButton} onClick={handleSignIn}>
              sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
