import { Outlet, Link } from 'react-router-dom';
import Header from './header';
import Navigation from './navigation';
import styles from './layout.module.css';

export default function Layout() {
  //it doesn't like the reference to the stylesheet module but it still works on localhost
  return (
    <div className={styles.layout}>
      <Navigation />
      <Header />
      <main className={''}>
        <Outlet />
      </main>
    </div>
  );
}
