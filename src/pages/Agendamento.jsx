import { useState } from 'react';
import styles from './Agendamento.module.css';

function Agendamento() {
  const [nome, setNome] = useState('');
  const [tipoSanguineo, setTipoSanguineo] = useState('O+');
  const [unidade, setUnidade] = useState('Sede Fundação Centro HEMOPA');
  const [confirmado, setConfirmado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setConfirmado(true);
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Agendar Doação de Sangue</h1>
      <p className={styles.subtitulo}>
        Reserve seu horário para evitar filas no atendimento.
      </p>

      {confirmado ? (
        <div className={styles.sucesso}>
          <h2>Agendamento Confirmado!</h2>
          <p>
            Obrigado, <strong>{nome}</strong> (Tipo: <strong>{tipoSanguineo}</strong>).
            Aguardamos você na unidade <strong>{unidade}</strong>.
          </p>
          <button onClick={() => setConfirmado(false)} className={styles.btnVoltar}>
            Fazer novo agendamento
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Nome Completo:
            <input
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Tipo Sanguíneo:
            <select
              value={tipoSanguineo}
              onChange={(e) => setTipoSanguineo(e.target.value)}
              className={styles.input}
            >
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="Não sei">Ainda não sei meu tipo</option>
            </select>
          </label>

          <label className={styles.label}>
            Unidade de Coleta:
            <select
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
              className={styles.input}
            >
              <option value="Sede Fundação Centro HEMOPA">Sede Fundação Centro HEMOPA</option>
              <option value="IHEBE (Instituto de Hematologia de Belém)">IHEBE (Instituto de Hematologia de Belém)</option>
            </select>
          </label>

          <button type="submit" className={styles.btnEnviar}>
            Confirmar Agendamento
          </button>
        </form>
      )}
    </section>
  );
}

export default Agendamento;