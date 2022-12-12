import { Outlet, Link } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import styles from './layout.module.css';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={''}>
        <Outlet />
      </main>
    </div>
  );
}
