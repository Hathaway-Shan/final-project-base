import Navigation from '../Navigation/navigation';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>100 Jobs</h1>

      <div className={''}>{/* <Navigation /> */}</div>
    </header>
  );
}
