import React, { useState } from "react";
import "./index.css";
import { BigButton } from "./components/utils/Button";

import CardToggle from "./components/utils/CardToggle";
function App() {
  const [Open, setOpen] = useState(false);

  // const OpenCard = () => {
  //   setOpen(!Open);
  //   console.log("hola");
  //   return;
  // };

  return (
    <>
      <div className="" id="test2">
        <CardToggle
          buttonId="test2"
          cardId="54"
          children="estoy bien"></CardToggle>
      </div>
      <div id="test">hola</div>
      <CardToggle buttonId="1" cardId="67" children="hola que tal" />
      <BigButton id="1"> test</BigButton>
    </>
  );
}

export default App;
