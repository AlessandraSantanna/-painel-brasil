
import { Map } from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div>

        <span className="hero-tag">
          ● DADOS ATUALIZADOS
        </span>

        <h2>
          Brasil em
          <span> números</span>
        </h2>

        <p>
          Explore indicadores, estatísticas e informações
          dos estados brasileiros em um único painel.
        </p>

      </div>

      <div className="hero-icon">
        <Map size={90} strokeWidth={1.2} />
      </div>

    </section>
  );
}

export default Hero;

