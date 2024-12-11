import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link className={styles.a} to="/">Home</Link></li>
        <li className={styles.li}><Link className={styles.a} to="/contact">Contact</Link></li>
        <li className={styles.li}><Link className={styles.a} to="/recipes">Recipes</Link></li>
        <li className={styles.li}><Link className={styles.a} to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;

