import { useState } from "react";
import meGusta from "./img/me-gusta.png";
import noMeGusta from "./img/no-me-gusta.jpg";

function App() {
  const [thumb, setThumb] = useState(true);
  const changeThumb = () => {
    setThumb(thumb ? false : true);
  };
  return (
    <>
      <div className="contenedor">
        <i
          className={thumb ? "far fa-thumbs-up" : "far fa-thumbs-down"}
          onClick={changeThumb}
        ></i>
        <img
          src={thumb ? meGusta : noMeGusta}
          alt={thumb ? "Cara de satisfacción" : "Cara de desagrado"}
        />
      </div>
    </>
  );
}

export default App;
