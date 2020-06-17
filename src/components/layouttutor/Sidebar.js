import React from "react";
import ListadoOpciones from '../tutor/ListadoOpciones';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Aritmética<span><br /> Sin Fronteras</span>
      </h1>      
      <div className="proyectos">
        <h2>Opciones</h2>
        <ListadoOpciones />
      </div>
    </aside>
  );
};

export default Sidebar;
