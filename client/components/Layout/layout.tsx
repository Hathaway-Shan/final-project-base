import { Outlet, Link } from 'react-router-dom';
import Header from '../Header/header';
import Navigation from '../Navigation/navigation';
import styles from './layout.module.css';

export default function Layout() {
  //it doesn't like the reference to the stylesheet module but it still works on localhost
  return (
    <div className={styles.layout}>
      <Header />
      <main className={''}>
        <Outlet />
      </main>
    </div>
  );
}
