import {
  BarChart3,
  Users,
  Building2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import "./Stats.css";

function Stats({ quantidadeEstados }) {
  return (
    <section className="stats-grid">

      <div className="stat-card">

        <div className="stat-top">
          <div className="stat-icon">
            <Users size={21} />
          </div>

          <span className="positive">
            <TrendingUp size={14} />
            +0,8%
          </span>
        </div>

        <span className="stat-label">
          População
        </span>

        <strong>
          212,6 mi
        </strong>

        <span className="stat-description">
          habitantes
        </span>

      </div>


      <div className="stat-card">

        <div className="stat-top">
          <div className="stat-icon">
            <BarChart3 size={21} />
          </div>

          <span className="positive">
            <TrendingUp size={14} />
            +2,1%
          </span>
        </div>

        <span className="stat-label">
          PIB
        </span>

        <strong>
          R$ 11,7 tri
        </strong>

        <span className="stat-description">
          Produto Interno Bruto
        </span>

      </div>


      <div className="stat-card">

        <div className="stat-top">
          <div className="stat-icon">
            <Building2 size={21} />
          </div>

          <span className="positive">
            {quantidadeEstados || 27}
          </span>
        </div>

        <span className="stat-label">
          Estados
        </span>

        <strong>
          26 + DF
        </strong>

        <span className="stat-description">
          unidades federativas
        </span>

      </div>


      <div className="stat-card">

        <div className="stat-top">
          <div className="stat-icon">
            <ArrowUpRight size={21} />
          </div>
        </div>

        <span className="stat-label">
          Indicadores
        </span>

        <strong>
          +50
        </strong>

        <span className="stat-description">
          dados disponíveis
        </span>

      </div>

    </section>
  );
}

export default Stats;