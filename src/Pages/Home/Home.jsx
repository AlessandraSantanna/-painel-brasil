import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ConsultaRapida from "../../componentes/ConsultaRapida/ConsultaRapida";
import { buscarLocalizacaoPorUf } from "../../services/localizacaoBrasil";
import BrazilMap from "../../componentes/BrazilMap/BrazilMap";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

const [resultadoConsulta, setResultadoConsulta] =
  useState(null);
 const ufConsulta =
  resultadoConsulta?.tipo === "DDD"
    ? resultadoConsulta.state
    : resultadoConsulta?.uf;

const localizacao =
  ufConsulta
    ? buscarLocalizacaoPorUf(ufConsulta)
    : null;
  return (
    <main className="home">

      {/* =====================================================
          FUNDO
          ===================================================== */}

      <div className="home-background">
        <div className="home-orb home-orb-1"></div>
        <div className="home-orb home-orb-2"></div>
        <div className="home-orb home-orb-3"></div>
      </div>


      {/* =====================================================
          CABEÇALHO
          ===================================================== */}

      <header className="home-header">

        <button
          className="home-brand"
          onClick={() => navigate("/")}
        >
          <span className="brand-flag">
            🇧🇷
          </span>

          <span className="brand-name">
            PAINEL <strong>BRASIL</strong>
          </span>
        </button>


        <nav className="home-nav">

          <button
            onClick={() =>
              document
                .getElementById("consulta-rapida")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Consultas
          </button>


          <button
            onClick={() => navigate("/estados")}
          >
            Estados
          </button>


          <button
            onClick={() =>
              document
                .getElementById("sobre")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Sobre
          </button>

        </nav>

      </header>


      {/* =====================================================
          PAINEL PRINCIPAL
          ===================================================== */}

      <section className="home-dashboard">


        {/* ===================================================
            LADO ESQUERDO — HERO
            =================================================== */}

        <div className="hero-panel">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="hero-badge-dot"></span>

              Dados públicos brasileiros
            </div>


            <h1>
              Informação brasileira
              <span>
                em um só lugar.
              </span>
            </h1>


            <p className="hero-description">
              Consulte informações públicas do Brasil
              de forma rápida, simples e inteligente.
            </p>


            <div className="hero-actions">

              <button
                className="hero-button primary"
                onClick={() =>
                  document
                    .getElementById("consulta-rapida")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Começar consulta

                <span>
                  →
                </span>
              </button>


              <button
                className="hero-button secondary"
                onClick={() =>
                  navigate("/estados")
                }
              >
                Explorar Estados

                <span>
                  ↗
                </span>
              </button>

            </div>

          </div>


          {/* =================================================
              ESTATÍSTICAS
              ================================================= */}

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>26</strong>
              <span>Estados</span>
            </div>


            <div className="hero-stat-divider"></div>


            <div className="hero-stat">
              <strong>3</strong>
              <span>Consultas</span>
            </div>


            <div className="hero-stat-divider"></div>


            <div className="hero-stat">
              <strong>100%</strong>
              <span>Dados públicos</span>
            </div>

          </div>

        </div>


        {/* ===================================================
            LADO DIREITO — CONSULTA
            =================================================== */}

        <div
          className="consulta-panel"
          id="consulta-rapida"
        >

          <div className="consulta-panel-top">

            <div>

              <span className="panel-label">
                CONSULTA RÁPIDA
              </span>


              <h2>
                O que deseja
                <span>
                  {" "}consultar?
                </span>
              </h2>


              <p>
                Pesquise uma informação e descubra
                sua localização no Brasil.
              </p>

            </div>


            <div className="panel-search-icon">
              🔎
            </div>

          </div>


          {/* =================================================
              COMPONENTE DE CONSULTA
              ================================================= */}

         <ConsultaRapida
  onResultado={setResultadoConsulta}
/>


          {/* =================================================
              RESULTADO
              ================================================= */}

          <div className="resultado-panel">

            {!resultadoConsulta? (

              <div className="resultado-placeholder">

                <div className="placeholder-icon">
                  🇧🇷
                </div>


                <div>

                  <strong>
                    Aguardando consulta
                  </strong>


                  <span>
                    O resultado aparecerá aqui.
                  </span>

                </div>

              </div>

            ) : (

   <div className="resultado-active">

  <div className="resultado-active-icon">
    {resultadoConsulta.tipo === "DDD"
      ? "📞"
      : "📍"}
  </div>


  <div className="resultado-active-info">

    <span>
      {resultadoConsulta.tipo === "DDD"
        ? "DDD ENCONTRADO"
        : "LOCALIZAÇÃO ENCONTRADA"}
    </span>


    <strong>
      {resultadoConsulta.tipo === "DDD"
  ? `DDD ${resultadoConsulta.state}`
        : `${resultadoConsulta.localidade} — ${resultadoConsulta.uf}`}
    </strong>


    <p>
      {resultadoConsulta.tipo === "DDD"
        ? `${localizacao?.nome || "Estado identificado"} • ${resultadoConsulta.cities?.length || 0} cidades`
        : `${resultadoConsulta.logradouro || "Logradouro não informado"}${
            resultadoConsulta.bairro
              ? ` • ${resultadoConsulta.bairro}`
              : ""
          }`}
    </p>


    {localizacao && (
      <div className="resultado-regiao">

        <span className="regiao-icon">
          🌎
        </span>

        <div>

          <small>
            REGIÃO DO BRASIL
          </small>

          <strong>
            {localizacao.regiao}
          </strong>

        </div>

      </div>
    )}


    {localizacao && (
      <div className="resultado-mapa">

        <BrazilMap
          compacto
          regiaoInicial={localizacao.regiao}
        />

      </div>
    )}

  </div>


  <div className="resultado-uf">
    {ufConsulta}
  </div>

</div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          REFERÊNCIA DOS ESTADOS
          ===================================================== */}

      <section className="referencia-estados">

        <div className="referencia-estados-conteudo">

          <div>

            <span className="referencia-label">
              🇧🇷 REFERÊNCIA DO BRASIL
            </span>


            <h2>
              Explore os Estados
            </h2>


            <p>
              Consulte estados, regiões e municípios
              através do mapa interativo.
            </p>

          </div>


          <button
            className="btn-estados"
            onClick={() => navigate("/estados")}
          >
            🗺️ Consultar Estados
          </button>

        </div>

      </section>


      {/* =====================================================
          SOBRE
          ===================================================== */}

      <section
        className="home-about"
        id="sobre"
      >

        <span>
          🇧🇷 PAINEL BRASIL
        </span>


        <p>
          Um painel para centralizar consultas públicas
          brasileiras e facilitar a descoberta de
          informações relacionadas ao território nacional.
        </p>

      </section>

    </main>
  );
}

export default Home;