import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.titulo}>Doe Sangue, Compartilhe Vida</h1>
        <p className={styles.subtitulo}>
          Os bancos de sangue precisam de reposição diária. Encontre o posto de coleta mais
          próximo, confira os critérios básicos e agende sua doação.
        </p>
        <div className={styles.acoes}>
          <Link to="/hemocentros" className={styles.btnPrimario}>
            Ver Postos de Coleta
          </Link>
          <Link to="/requisitos" className={styles.btnSecundario}>
            Conferir Requisitos
          </Link>
        </div>
      </div>

      <div className={styles.indicadores}>
        <div className={styles.cardInfo}>
          <h2>4 Vidas</h2>
          <p>Podem ser salvas com uma única bolsa de 450 ml de sangue doado.</p>
        </div>
        <div className={styles.cardInfo}>
          <h2>40 Minutos</h2>
          <p>É o tempo médio total entre cadastro, triagem clínica e coleta.</p>
        </div>
        <div className={styles.cardInfo}>
          <h2>24 Horas</h2>
          <p>Tempo que seu organismo leva para repor o volume líquido doado.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;