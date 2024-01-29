import React, { useState } from "react";
import Cards from "./CardS";

// Componente para abrir y cerrar una tarjeta
const CardToggle = ({ buttonId, cardId, children }) => {
  const [open, setOpen] = useState(true);
  const toggleCard = () => {
    setOpen(!open);
  };

  return (
    <>
      <button id="OpenCard" onClick={toggleCard}>
        Botón {buttonId}
      </button>
      {open && <Cards id={cardId}>{children}</Cards>}
    </>
  );
};
export default CardToggle;
