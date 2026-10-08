import { useEffect, useState } from "react";

import {
  MapPinned,
  MousePointer2,
  X,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import "./BrazilMap.css";

const regioes = {
  Norte: {
    siglas: ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],

    estados: [
      "Acre",
      "Amapá",
      "Amazonas",
      "Pará",
      "Rondônia",
      "Roraima",
      "Tocantins",
    ],

    cor: "#39ff88",
  },

  Nordeste: {
    siglas: [
      "AL",
      "BA",
      "CE",
      "MA",
      "PB",
      "PE",
      "PI",
      "RN",
      "SE",
    ],

    estados: [
      "Alagoas",
      "Bahia",
      "Ceará",
      "Maranhão",
      "Paraíba",
      "Pernambuco",
      "Piauí",
      "Rio Grande do Norte",
      "Sergipe",
    ],

    cor: "#ff3cac",
  },

  "Centro-Oeste": {
    siglas: ["DF", "GO", "MT", "MS"],

    estados: [
      "Distrito Federal",
      "Goiás",
      "Mato Grosso",
      "Mato Grosso do Sul",
    ],

    cor: "#a855f7",
  },

  Sudeste: {
    siglas: ["ES", "MG", "RJ", "SP"],

    estados: [
      "Espírito Santo",
      "Minas Gerais",
      "Rio de Janeiro",
      "São Paulo",
    ],

    cor: "#00e5ff",
  },

  Sul: {
    siglas: ["PR", "RS", "SC"],

    estados: [
      "Paraná",
      "Rio Grande do Sul",
      "Santa Catarina",
    ],

    cor: "#ff9f43",
  },
};

function BrazilMap({
  estados,
  estadoSelecionado,
  setEstadoSelecionado,
  municipios,
  carregandoMunicipios,
  carregando,
  erroEstados,
  erroMunicipios,
  regiaoInicial = null,
  compacto = false,
}) {
  const [regiaoSelecionada, setRegiaoSelecionada] =
    useState(null);

  /*
   * Quando um estado é selecionado,
   * encontramos automaticamente sua região.
   */
 useEffect(() => {
  if (regiaoInicial) {
    setRegiaoSelecionada(regiaoInicial);
    return;
  }

  if (estadoSelecionado?.regiao?.nome) {
    setRegiaoSelecionada(
      estadoSelecionado.regiao.nome
    );
  }
}, [regiaoInicial, estadoSelecionado]);
  /*
   * Selecionar estado
   */
  function selecionarEstado(sigla) {
    const estado = estados.find(
      (item) => item.sigla === sigla
    );

    if (!estado) return;

    setEstadoSelecionado(estado);
  }

  /*
   * Selecionar região
   */
  function selecionarRegiao(regiao) {
    setRegiaoSelecionada(regiao);

    /*
     * Ao trocar de região,
     * limpamos o estado anterior.
     */
    setEstadoSelecionado(null);
  }

  /*
   * Total de estados
   */
  const totalEstados = Object.values(regioes).reduce(
    (total, regiao) =>
      total + regiao.estados.length,
    0
  );

  /*
   * Região atual
   */
  const regiaoAtual = regiaoSelecionada
    ? regioes[regiaoSelecionada]
    : null;

  /*
   * Verifica se o estado selecionado
   * pertence à região aberta.
   */
  const estadoNaRegiao =
    estadoSelecionado &&
    regiaoAtual?.siglas.includes(
      estadoSelecionado.sigla
    );

  return (
<section
  className={`brazil-map ${
    compacto ? "brazil-map-compacto" : ""
  }`}
>
      {/* =================================
          FUNDO DECORATIVO
      ================================= */}

      <div className="neon-orb orb-one"></div>

      <div className="neon-orb orb-two"></div>


      {/* =================================
          CABEÇALHO
      ================================= */}

      <div className="brazil-map-header">

        <div>

          <div className="map-title-line">

            <span className="map-status-dot"></span>

            <span className="panel-label">
              PAINEL INTERATIVO
            </span>

          </div>

          <h3>
            Brasil por regiões
          </h3>

          <p>
            Explore as regiões brasileiras e
            descubra seus estados.
          </p>

        </div>


        <div className="map-total">

          <span className="total-icon">
            <Sparkles size={15} />
          </span>

          <strong>
            {totalEstados}
          </strong>

          <span>
            UFs
          </span>

        </div>

      </div>


      {/* =================================
          ÁREA PRINCIPAL
      ================================= */}

      <div className="brazil-map-content">


        {/* =================================
            MAPA
        ================================= */}

        <div className="map-visual">

          <div className="map-grid"></div>

          <div className="map-glow"></div>


          <svg
            viewBox="0 0 600 620"
            className="brazil-svg"
            role="img"
            aria-label="Mapa interativo das regiões do Brasil"
          >

            {/* =============================
                NORTE
            ============================= */}

            <path
              className={`region region-norte ${
                regiaoSelecionada === "Norte"
                  ? "active"
                  : ""
              }`}
              d="
                M112 105
                L175 70
                L250 83
                L315 70
                L382 103
                L420 145
                L393 194
                L350 213
                L305 202
                L270 225
                L210 212
                L164 226
                L126 198
                L91 165
                Z
              "
              onClick={() =>
                selecionarRegiao("Norte")
              }
            />


            {/* =============================
                NORDESTE
            ============================= */}

            <path
              className={`region region-nordeste ${
                regiaoSelecionada === "Nordeste"
                  ? "active"
                  : ""
              }`}
              d="
                M420 145
                L473 170
                L505 217
                L486 266
                L450 282
                L416 268
                L393 230
                L350 213
                L393 194
                Z
              "
              onClick={() =>
                selecionarRegiao("Nordeste")
              }
            />


            {/* =============================
                CENTRO-OESTE
            ============================= */}

            <path
              className={`region region-centro-oeste ${
                regiaoSelecionada ===
                "Centro-Oeste"
                  ? "active"
                  : ""
              }`}
              d="
                M270 225
                L305 202
                L350 213
                L393 230
                L416 268
                L389 329
                L343 360
                L285 341
                L253 295
                Z
              "
              onClick={() =>
                selecionarRegiao(
                  "Centro-Oeste"
                )
              }
            />


            {/* =============================
                SUDESTE
            ============================= */}

            <path
              className={`region region-sudeste ${
                regiaoSelecionada === "Sudeste"
                  ? "active"
                  : ""
              }`}
              d="
                M416 268
                L450 282
                L474 326
                L448 372
                L405 395
                L366 383
                L343 360
                L389 329
                Z
              "
              onClick={() =>
                selecionarRegiao("Sudeste")
              }
            />


            {/* =============================
                SUL
            ============================= */}

            <path
              className={`region region-sul ${
                regiaoSelecionada === "Sul"
                  ? "active"
                  : ""
              }`}
              d="
                M366 383
                L405 395
                L398 446
                L367 495
                L330 518
                L295 493
                L306 445
                L343 410
                Z
              "
              onClick={() =>
                selecionarRegiao("Sul")
              }
            />


            {/* =============================
                NOMES DAS REGIÕES
            ============================= */}

            <text
              x="240"
              y="145"
              className="region-name"
            >
              NORTE
            </text>

            <text
              x="438"
              y="220"
              className="region-name"
            >
              NORDESTE
            </text>

            <text
              x="325"
              y="280"
              className="region-name"
            >
              CENTRO-OESTE
            </text>

            <text
              x="402"
              y="340"
              className="region-name"
            >
              SUDESTE
            </text>

            <text
              x="345"
              y="450"
              className="region-name"
            >
              SUL
            </text>

          </svg>


          {/* =================================
              LEGENDA
          ================================= */}

          <div className="map-hint">

            <MousePointer2 size={14} />

            <span>
              Clique em uma região
            </span>

          </div>

        </div>


        {/* =================================
            PAINEL LATERAL
        ================================= */}

        <aside
          className={`region-info ${
            regiaoSelecionada
              ? "show"
              : ""
          }`}
        >

          {/* =================================
              CARREGANDO ESTADOS
          ================================= */}

          {carregando ? (

            <div className="region-empty">

              <div className="loading-spinner"></div>

              <span className="empty-mini">
                CONECTANDO À API
              </span>

              <strong>
                Carregando dados...
              </strong>

              <p>
                Buscando informações dos estados
                brasileiros no IBGE.
              </p>

            </div>


          ) : erroEstados ? (

            /* =================================
                ERRO AO CARREGAR ESTADOS
            ================================= */

            <div className="region-empty">

              <div className="empty-icon error-icon">
                ⚠️
              </div>

              <span className="empty-mini">
                ERRO NA CONSULTA
              </span>

              <strong>
                Dados indisponíveis
              </strong>

              <p>
                Não foi possível carregar os estados
                neste momento.
              </p>

            </div>


          ) : (

            /* =================================
                CONTEÚDO NORMAL
            ================================= */

            <>
              {/* =================================
                  NENHUMA REGIÃO
              ================================= */}

              {!regiaoSelecionada ? (

                <div className="region-empty">

                  <div className="empty-icon">

                    <MapPinned size={25} />

                  </div>

                  <span className="empty-mini">
                    EXPLORE O MAPA
                  </span>

                  <strong>
                    Escolha uma região
                  </strong>

                  <p>
                    Clique em qualquer região do
                    mapa para visualizar seus estados.
                  </p>

                  <div className="region-counter">

                    <span>
                      5
                    </span>

                    regiões

                  </div>

                </div>


              ) : estadoNaRegiao ? (


                /* =================================
                    ESTADO SELECIONADO
                ================================= */

                <div
                  className="region-selected state-detail"
                  style={{
                    "--region-color":
                      regiaoAtual.cor,
                  }}
                >

                  {/* VOLTAR */}

                  <button
                    type="button"
                    className="back-region"
                    onClick={() => {
                      setEstadoSelecionado(null);
                    }}
                  >

                    <ArrowLeft size={15} />

                    Voltar para{" "}
                    {regiaoSelecionada}

                  </button>


                  {/* IDENTIFICAÇÃO */}

                  <div className="selected-top">

                    <span className="selected-dot"></span>

                    <span>
                      ESTADO SELECIONADO
                    </span>

                  </div>


                  {/* NOME */}

                  <h4>
                    {estadoSelecionado.nome}
                  </h4>


                  {/* REGIÃO */}

                  <p className="state-region-name">

                    {estadoSelecionado.sigla}

                    {" · "}

                    {estadoSelecionado.regiao.nome}

                  </p>


                  {/* =================================
                      QUANTIDADE DE MUNICÍPIOS
                  ================================= */}

                  <div className="municipality-highlight">

                    <div className="municipality-icon">

                      <MapPinned size={22} />

                    </div>

                    <div>

                      <span>
                        MUNICÍPIOS
                      </span>

                      <strong>

                        {carregandoMunicipios
                          ? "..."
                          : erroMunicipios
                            ? "!"
                            : municipios.length}

                      </strong>

                    </div>

                  </div>


                  {/* =================================
                      STATUS DA API
                  ================================= */}

                  <div className="api-status">

                    <span
                      className={`api-status-dot ${
                        erroMunicipios
                          ? "api-error-dot"
                          : ""
                      }`}
                    ></span>

                    <span>

                      {carregandoMunicipios
                        ? "Consultando municípios no IBGE..."
                        : erroMunicipios
                          ? "Não foi possível carregar os municípios."
                          : "Dados carregados pela API do IBGE"}

                    </span>

                  </div>

                </div>


              ) : (


                /* =================================
                    REGIÃO SELECIONADA
                ================================= */

                <div
                  className="region-selected"
                  style={{
                    "--region-color":
                      regiaoAtual.cor,
                  }}
                >

                  {/* FECHAR */}

                  <button
                    type="button"
                    className="close-region"
                    onClick={() => {

                      setRegiaoSelecionada(null);

                      setEstadoSelecionado(null);

                    }}
                    aria-label="Fechar região"
                  >

                    <X size={17} />

                  </button>


                  {/* TÍTULO */}

                  <div className="selected-top">

                    <span className="selected-dot"></span>

                    <span>
                      REGIÃO SELECIONADA
                    </span>

                  </div>


                  {/* NOME DA REGIÃO */}

                  <h4>
                    {regiaoSelecionada}
                  </h4>


                  {/* QUANTIDADE */}

                  <div className="region-number">

                    <strong>
                      {regiaoAtual.estados.length}
                    </strong>

                    <span>
                      estados
                    </span>

                  </div>


                  {/* =================================
                      LISTA DE ESTADOS
                  ================================= */}

                  <div className="state-list">

                    {regiaoAtual.estados.map(
                      (estado, index) => {

                        const sigla =
                          regiaoAtual.siglas[index];

                        const selecionado =
                          estadoSelecionado?.sigla ===
                          sigla;

                        return (

                          <button
                            type="button"
                            className={`state-item ${
                              selecionado
                                ? "selected"
                                : ""
                            }`}
                            key={sigla}
                            onClick={() =>
                              selecionarEstado(sigla)
                            }
                          >

                            <span>
                              {estado}
                            </span>

                            <small>
                              {sigla}
                            </small>

                          </button>

                        );

                      }
                    )}

                  </div>

                </div>

              )}

            </>

          )}

        </aside>

      </div>

    </section>
  );
}

export default BrazilMap;