import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          VidaGota
        </Link>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.link}>Início</Link>
          <Link to="/hemocentros" className={styles.link}>Hemocentros</Link>
          <Link to="/requisitos" className={styles.link}>Quem Pode Doar</Link>
          <Link to="/agendamento" className={styles.btnAgendar}>Agendar Doação</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;