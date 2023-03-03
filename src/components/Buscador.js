import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value);
    console.log(busqueda);
    //El listado completo de películas. Lo obtengo desde App y lo paso como prop (listadoState)

    //Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());  
    });

    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false)
    }

    //Actualizar el estado del listado principal con lo que he logrado filtrar
    setListadoState(pelis_encontradas);
  }
  return (
    <>
            <div className="buscar">
                <h3 className="titulo">Buscador: {busqueda}</h3>
                {(noEncontrado && busqueda.length > 1) && (<span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>)}
                <form>
                    <input type="text"
                    id='campo_buscar'
                    name='busqueda'
                    autoComplete='off'
                    onChange={buscarPeli}
                    />
                    <button className="boton-buscar">Buscar</button>
                </form>
            </div>
    </>
  )
}
