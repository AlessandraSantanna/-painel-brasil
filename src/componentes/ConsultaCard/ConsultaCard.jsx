import "./ConsultaCard.css";

function ConsultaCard({
  icon,
  title,
  description,
  color,
  onClick,
}) {
  return (
    <button
      className="consulta-card"
      style={{ "--card-color": color }}
      onClick={onClick}
      type="button"
    >
      <div className="consulta-card-glow"></div>

      <div className="consulta-card-icon">
        {icon}
      </div>

      <div className="consulta-card-content">
        <span className="consulta-card-label">
          CONSULTA
        </span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="consulta-card-arrow">
        →
      </div>
    </button>
  );
}

export default ConsultaCard;