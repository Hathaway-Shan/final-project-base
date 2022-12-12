import React from 'react';
import styles from './LoadingAnimation.module.css';

export default function LoadingAnimation() {
  return (
    <div className={styles.loadingAnimationWrapper}>
      <div class={styles.loadingSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
