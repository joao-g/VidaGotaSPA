import styles from './Rodape.module.css';

function Rodape() {
  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>
        <strong>VidaGota</strong> — Uma única doação pode salvar até 4 vidas.
      </p>
      <p className={styles.subtexto}>
        Projeto SPA React • Laboratório de Desenvolvimento Web (2026)
      </p>
    </footer>
  );
}

export default Rodape;