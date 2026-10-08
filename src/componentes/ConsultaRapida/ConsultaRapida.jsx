
import { useState } from "react";
import { buscarCep } from "../../services/apiCep";
import { buscarDdd } from "../../services/apiDdd";
import "./ConsultaRapida.css";

function ConsultaRapida({ onResultado }) {
  const [tipoConsulta, setTipoConsulta] = useState("CEP");
  const [valor, setValor] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  function selecionarConsulta(tipo) {
    setTipoConsulta(tipo);
    setValor("");
    setErro("");

    if (onResultado) {
      onResultado(null);
    }
  }

  function handleChange(event) {
    let novoValor = event.target.value;

    if (tipoConsulta === "CEP") {
      novoValor = novoValor.replace(/\D/g, "");

      if (novoValor.length > 8) {
        novoValor = novoValor.slice(0, 8);
      }

      if (novoValor.length > 5) {
        novoValor =
          novoValor.slice(0, 5) + "-" + novoValor.slice(5);
      }
    }

    if (tipoConsulta === "DDD") {
      novoValor = novoValor.replace(/\D/g, "");

      if (novoValor.length > 2) {
        novoValor = novoValor.slice(0, 2);
      }
    }

    if (tipoConsulta === "CNPJ") {
      novoValor = novoValor.replace(/\D/g, "");

      if (novoValor.length > 14) {
        novoValor = novoValor.slice(0, 14);
      }
    }

    setValor(novoValor);
  }

  async function handleBuscar() {
  setErro("");

  if (!valor.trim()) {
    setErro(
      tipoConsulta === "CEP"
        ? "Digite um CEP para consultar."
        : tipoConsulta === "CNPJ"
        ? "Digite um CNPJ para consultar."
        : "Digite um DDD para consultar."
    );

    return;
  }

  try {
    setLoading(true);

    let resultado;

    if (tipoConsulta === "CEP") {
      resultado = await buscarCep(valor);
    }

    if (tipoConsulta === "DDD") {
      resultado = await buscarDdd(valor);
    }

    if (tipoConsulta === "CNPJ") {
      setErro("CNPJ estará disponível em breve.");
      return;
    }

    if (onResultado) {
      onResultado({
        tipo: tipoConsulta,
        ...resultado,
      });
    }

  } catch (error) {

    setErro(
      error.message ||
      "Não foi possível realizar a consulta."
    );

    if (onResultado) {
      onResultado(null);
    }

  } finally {
    setLoading(false);
  }
}
  function obterPlaceholder() {
    if (tipoConsulta === "CEP") {
      return "Ex.: 20040-020";
    }

    if (tipoConsulta === "CNPJ") {
      return "Ex.: 00.000.000/0001-00";
    }

    return "Ex.: 21";
  }

  return (
    <section className="consulta-rapida">
      <div className="consulta-rapida-header">
        <span className="consulta-rapida-icon">
          🔎
        </span>

        <div>
          <span className="consulta-rapida-label">
            CONSULTA RÁPIDA
          </span>

          <h2>O que deseja consultar?</h2>
        </div>
      </div>

      <div className="tipos-consulta">
        <button
          type="button"
          className={`tipo-consulta ${
            tipoConsulta === "CEP" ? "ativo" : ""
          }`}
          onClick={() => selecionarConsulta("CEP")}
        >
          <span>📍</span>
          CEP
        </button>

        <button
          type="button"
          className={`tipo-consulta ${
            tipoConsulta === "CNPJ" ? "ativo" : ""
          }`}
          onClick={() => selecionarConsulta("CNPJ")}
        >
          <span>🏢</span>
          CNPJ
        </button>

        <button
          type="button"
          className={`tipo-consulta ${
            tipoConsulta === "DDD" ? "ativo" : ""
          }`}
          onClick={() => selecionarConsulta("DDD")}
        >
          <span>📞</span>
          DDD
        </button>
      </div>

      <div className="consulta-rapida-form">
        <div className="campo-consulta">
          <label htmlFor="valor-consulta">
            {tipoConsulta === "CEP"
              ? "Digite o CEP"
              : tipoConsulta === "CNPJ"
              ? "Digite o CNPJ"
              : "Digite o DDD"}
          </label>

          <input
            id="valor-consulta"
            type="text"
            value={valor}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleBuscar();
              }
            }}
            placeholder={obterPlaceholder()}
          />
        </div>

        <button
          type="button"
          className="btn-buscar"
          onClick={handleBuscar}
          disabled={loading}
        >
          {loading ? "Consultando..." : "🔎 Buscar"}
        </button>
      </div>

      {erro && (
        <p className="consulta-erro">
          ⚠️ {erro}
        </p>
      )}
    </section>
  );
}

export default ConsultaRapida;
