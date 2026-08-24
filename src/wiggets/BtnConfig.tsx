import { useState } from "react";
import { useTheme } from "./ThemeContext";

import "./btnConfig.css"

export function PageSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="settings-button">
        <img src="src/assets/settings_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
      </button>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="settings-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Configurações da página</h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="close-button"
              >
                ×
              </button>
            </div>

            <div className="settings-content">

              <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Modo escuro" : "☀️ Modo claro"}
              </button>
              {/*<label>
                <input type="checkbox" />
                Modo escuro
              </label>*/}

              <label>
                Tamanho da fonte
                <select defaultValue="medium">
                  <option value="small">Pequena</option>
                  <option value="medium">Média</option>
                  <option value="large">Grande</option>
                </select>
              </label>
            </div>

            <div className="modal-footer">
              {/*<button
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={() => {
                  // Salvar configurações aqui
                  setIsOpen(false);
                }}
              >
                Salvar
              </button>*/}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
