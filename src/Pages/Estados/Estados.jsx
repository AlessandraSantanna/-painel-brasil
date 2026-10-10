import { useEffect, useState } from "react";

import {
buscarEstados,
buscarMunicipios,
} from "../../services/api";

import Header from "../../componentes/Header/Header";
import BrazilMap from "../../componentes/BrazilMap/BrazilMap";

import "./Estados.css";

function Estados() {
const [estadoSelecionado, setEstadoSelecionado] =
useState(null);

const [estados, setEstados] = useState([]);

const [carregando, setCarregando] = useState(true);

const [municipios, setMunicipios] = useState([]);

const [carregandoMunicipios, setCarregandoMunicipios] =
useState(false);

const [erroEstados, setErroEstados] = useState(false);

const [erroMunicipios, setErroMunicipios] =
useState(false);

useEffect(() => {
async function carregarEstados() {
try {
setCarregando(true);
setErroEstados(false);

    const dados = await buscarEstados();
    setEstados(dados);
  } catch (error) {
    console.error("Erro ao buscar estados:", error);
    setErroEstados(true);
  } finally {
    setCarregando(false);
  }
}

carregarEstados();


}, []);

useEffect(() => {
async function carregarMunicipios() {
if (!estadoSelecionado) {
setMunicipios([]);
return;
}


  try {
    setCarregandoMunicipios(true);
    setErroMunicipios(false);

    const dados = await buscarMunicipios(
      estadoSelecionado.sigla
    );

    setMunicipios(dados);
  } catch (error) {
    console.error("Erro ao buscar municípios:", error);
    setMunicipios([]);
    setErroMunicipios(true);
  } finally {
    setCarregandoMunicipios(false);
  }
}

carregarMunicipios();


}, [estadoSelecionado]);

return ( <div className="estados-page"> <Header />

  <main className="estados-main">
   

    <section className="estados-mapa">
      <BrazilMap
        estados={estados}
        estadoSelecionado={estadoSelecionado}
        setEstadoSelecionado={setEstadoSelecionado}
        municipios={municipios}
        carregandoMunicipios={carregandoMunicipios}
        carregando={carregando}
        erroEstados={erroEstados}
        erroMunicipios={erroMunicipios}
      />
    </section>
  </main>
</div>

);
}

export default Estados;
