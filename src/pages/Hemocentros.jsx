import CardHemocentro from '../components/CardHemocentro';
import posto1Img from '../assets/posto1.jpg';
import posto2Img from '../assets/posto2.jpg';
import posto3Img from '../assets/posto3.jpg';
import styles from './Hemocentros.module.css';

function Hemocentros() {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Postos de Coleta</h1>
      <p className={styles.descricao}>
        Confira os horários de atendimento.
      </p>

      <div className={styles.grid}>
        <CardHemocentro
          nome="Sede Fundação Centro HEMOPA"
          bairro="Batista Campos"
          horario="Segunda a Sábado, 07h30 às 18h00"
          estoqueCritico={['O-', 'O+', 'A-']}
          imagem={posto1Img}
        />

        <CardHemocentro
          nome="IHEBE (Instituto de Hematologia de Belém)"
          bairro="Marco"
          horario="Segunda a Sexta, 07h30 às 18h00"
          estoqueCritico={['B-', 'AB-', 'O-']}
          imagem={posto2Img}
        />

        <CardHemocentro
          nome="Unidade Móvel de doação do HEMOPA"
          bairro="Indefinido"
          horario="Possui campanhas de doação regularmente por toda Belém"
          estoqueCritico={['O-', 'A+', 'B+']}
          imagem={posto3Img}
        />
      </div>
    </section>
  );
}

export default Hemocentros;