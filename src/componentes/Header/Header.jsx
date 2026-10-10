import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Header.css";

function MapaBrasilLogo() {
return ( <svg
   className="mapa-brasil-logo"
   viewBox="0 0 100 110"
   xmlns="http://www.w3.org/2000/svg"
   role="img"
   aria-label="Silhueta do mapa do Brasil"
 > <path
     d="M35 4
     L47 8 L55 15 L67 17 L73 27
     L84 31 L89 42 L83 52 L86 62
     L77 68 L74 79 L65 82 L60 96
     L50 104 L42 96 L35 86 L26 82
     L23 71 L14 65 L17 54 L10 45
     L16 35 L14 26 L24 21 L27 12 Z"
     fill="currentColor"
   /> </svg>
);
}

function Header() {
const navigate = useNavigate();
const location = useLocation();

function irPara(secao) {
if (location.pathname !== "/") {
navigate("/");
setTimeout(() => {
document.getElementById(secao)?.scrollIntoView({
behavior: "smooth",
});
}, 100);
return;
}


document.getElementById(secao)?.scrollIntoView({
  behavior: "smooth",
});


}

return ( <header className="header">
<button
className="brand"
onClick={() => navigate("/")}
aria-label="Ir para a página inicial"
> <span className="brand-icon"><img src="/mapa-brasil.png" alt="Mapa do Brasil" /></span>


    <span className="brand-name">
      PAINEL <strong>BRASIL</strong>
    </span>
  </button>

  <nav className="header-nav" aria-label="Menu principal">
    <button onClick={() => irPara("consulta-rapida")}>
      Consultas
    </button>

    <button onClick={() => navigate("/estados")}>
      Estados
    </button>

    <button onClick={() => irPara("sobre")}>
      Sobre
    </button>
  </nav>

  <button
    className="header-cta"
    onClick={() => irPara("consulta-rapida")}
  >
    Começar
    <ArrowRight size={16} />
  </button>
</header>


);
}

export default Header;
