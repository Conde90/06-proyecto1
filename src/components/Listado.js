import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

//Aquí recibo las props listadoState y setListadoState desde App porque ya no tengo el estado en este componente y los necesita como parámetros para esta función
export const Listado = ({listadoState, setListadoState}) => {

  //Crear estado para guardas las películas recuperadas del localStorage
  //const [listadoState, setListadoState] = useState ([]);

  //crear estado para editar
  const [editar, setEditar] = useState (0);

    //Utilizar useEffect para que se ejecute el método al cargar el componente
    useEffect(() => {
      console.log("Componente del listado de películas cargado!!!");
      conseguirPeliculas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  //Crear función para conseguir las películas del localStorage
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);

    return peliculas;
  }

  //Crear función para borrar la peli seleccionada
  const borrarPeli = (id) => {
    //Conseguir el listado actual de películas
    let pelis_almacenadas = conseguirPeliculas();

    //Filtrar el listado de películas para eliminar la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    //Actualizar estado del listado de películas
    setListadoState(nuevo_array_pelis);

    //Actualizar datos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));


  }

  return (

    //Recorriendo el array de películas para llenar la vista
    <>   
        {listadoState != null ? listadoState.map(peli => {
            return (
            <article id={peli.id} className="peli-item">
            <h3 className="titulo">{peli.titulo}</h3>
            <p className="descripcion">{peli.descripcion}</p>

            <button className="editar" onClick={() => setEditar(peli.id)}>Editar</button>
            <button className="borrar" onClick={() => borrarPeli(peli.id)}>Borrar</button>

            {/*Aparece formulario de editar*/}
            {editar === peli.id && (
              <Editar peli = {peli}
              conseguirPeliculas = {conseguirPeliculas}
              setEditar={setEditar}
              setListadoState={setListadoState}
              />
            )}

        </article>
            );
        })
        : <h2>No hay películas</h2> }
    </>
  )
}
