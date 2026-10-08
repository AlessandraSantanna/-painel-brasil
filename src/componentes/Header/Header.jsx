
import {
  Search,
  Bell,
  Sun,
} from "lucide-react";

import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="brand">

        <div className="brand-icon">
          🇧🇷
        </div>

        <div>
          <h1>Painel Brasil</h1>
          <span>
            Dados do Brasil em um só lugar
          </span>
        </div>

      </div>


      <div className="header-actions">

        <div className="search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Pesquisar..."
          />

        </div>


        <button className="icon-button">
          <Bell size={19} />
        </button>


        <button className="icon-button">
          <Sun size={19} />
        </button>

      </div>

    </header>
  );
}

export default Header;

