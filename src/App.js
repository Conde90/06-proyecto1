import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

    //Listado de películas en el componente principal App para poder usarlo desde cualquier componente
    const [listadoState, setListadoState] = useState ([]);

  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis películas</h1>
        </header>
        
        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section className="contenido">
            {/*Aquí va el listado de películas*/}
            {/*El componente listado recibe las props listadoState y listadoState desde  el componente App*/}
            <Listado listadoState = {listadoState} setListadoState={setListadoState} />
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador listadoState = {listadoState} setListadoState={setListadoState}/>

            {/*Recibo método setListadoState para actualizar el listado de películas y que se vea en la página la nueva peli sin tener que actualizar*/}  
            <Crear setListadoState={setListadoState}/>
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; BlackCoder - <a href="/#">blackcoder.mx</a>
        </footer>
    </div>
  );
}

export default App;
