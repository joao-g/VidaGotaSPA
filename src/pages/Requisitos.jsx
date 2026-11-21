import styles from './Requisitos.module.css';

function Requisitos() {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Requisitos Básicos para Doação</h1>
      <p className={styles.subtitulo}>
        Antes de comparecer ao hemocentro, verifique se você atende às condições essenciais:
      </p>

      <div className={styles.listaBox}>
        <div className={styles.item}>
          <h3>Idade e Peso</h3>
          <p>Ter entre 16 e 69 anos (menores de 18 precisam de autorização formal) e pesar no mínimo 50 kg.</p>
        </div>

        <div className={styles.item}>
          <h3>Descanso e Alimentação</h3>
          <p>Ter dormido pelo menos 6 horas nas últimas 24 horas e estar bem alimentado (evitar comidas gordurosas 3h antes).</p>
        </div>

        <div className={styles.item}>
          <h3>Documento Oficial</h3>
          <p>Apresentar documento original com foto emitido por órgão oficial (RG, CNH, Passaporte ou Carteira de Trabalho).</p>
        </div>

        <div className={styles.item}>
          <h3>Intervalo entre Doações</h3>
          <p>Homens podem doar a cada 60 dias (máximo 4 vezes ao ano) e mulheres a cada 90 dias (máximo 3 vezes ao ano).</p>
        </div>
      </div>
    </section>
  );
}

export default Requisitos;