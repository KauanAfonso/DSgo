export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  function handleClick() {
    onIniciarMissao(missao);
  }

  return (
    <article
      className='missao-card'
      id="article_card"
      style={{ backgroundColor: concluida ? "lightgray" : "white" }}
    >
      <h3 id={missao.id}>{missao.titulo}</h3>
      <p>{missao.missao}</p>
      <button
        onClick={handleClick}
        disabled={concluida}
        style={{
          backgroundColor: concluida ? "gray" : "#007bff",
          color: "white",
          cursor: concluida ? "not-allowed" : "pointer",
        }}
      >
        {concluida ? "Missão concluída" : "Iniciar Missão"}
      </button>
    </article>
  );
}
