import React from "react";
import ListadoActividades from '../Proyectos/ListadoActividades';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Aritmética<span><br /> Sin Fronteras</span>
      </h1>      
      <div className="proyectos">
        <h2>Actividades</h2>
        <ListadoActividades />
      </div>
    </aside>
  );
};

export default Sidebar;
