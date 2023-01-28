import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import { signInUser } from '../../services/user-utils';
import { signUpUser } from '../../services/user-utils';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const { user, setUser } = useUser();
  const { type } = useParams();
  const typeName = type === 'sign-in' ? 'sign-in' : 'sign-up';

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newUser = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    await signUpUser(newUser);
    setUser(newUser);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const existingUser = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    await signInUser(existingUser);
    setUser(existingUser);
  };

  if (user) return <Navigate to="/" replace={true} />;

  return (
    <div className={styles.authWrapper}>
      <div className={styles.formWrapper}>
        <form
          className={styles.form}
          onSubmit={type === 'sign-in' ? handleSignIn : handleSignUp}
        >
          <h1 className={styles.formTitle}>Sign Up</h1>
          <p className={styles.formDescription}>
            Already have an account?{' '}
            <a href="/auth/sign-in">Sign In</a> here!
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
            <button type="submit" className={styles.formButton}>
              {typeName}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
