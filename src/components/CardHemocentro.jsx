import styles from './CardHemocentro.module.css';

function CardHemocentro({ nome, bairro, horario, imagem }) {
  return (
    <article className={styles.card}>
      <img src={imagem} alt={`Fachada do ${nome}`} className={styles.imagem} />
      <div className={styles.conteudo}>
        <span className={styles.badge}>{bairro}</span>
        <h3 className={styles.titulo}>{nome}</h3>
        <p className={styles.info}>
          <strong>Funcionamento:</strong> {horario}
        </p>
      </div>
    </article>
  );
}

export default CardHemocentro;