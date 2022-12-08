import { Outlet, Link } from 'react-router-dom';
import Header from './header';
import styles from './layout.module.css';

export default function Layout() {
  //it doesn't like the reference to the stylesheet module but it still works on localhost
  return (
    <div className={''}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
