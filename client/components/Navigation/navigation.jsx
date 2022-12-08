import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import linkStyles from '../link.module.css';

export default function Navigation() {
  //setting state in here breaks everything no idea why
  return (
    <nav className={styles.navigation}>
      <NavLink to="">Home</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
}
