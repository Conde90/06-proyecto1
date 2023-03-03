import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStortage';

//Recibo como parámetro el método setListadoState desde el componente principal App
export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir película";

    //Crear estado vacía para guardar datos del objeto "peli"
    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    }); 

    const conseguirdatosForm = e => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = e.target.titulo.value;
        let descripcion = e.target.descripcion.value;

        //Crear objeto de la película a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        
        //Llenando el estado con los datos del objeto "peli"
        setPeliState(peli);

        //Actualizar estado del listado principal
        //Agrego la nueva peli al listado existente
        setListadoState(elementos => {
            return [...elementos, peli];
        })

        //Guardar estado en el almacenamiento local
          GuardarEnStorage("pelis", peli);
        
    }

  return (

        <div className="agregar">
                <h3 className="titulo">{tituloComponente}</h3>

                <strong>
                {(peliState.titulo && peliState.descripcion) && "Has creado la película " + peliState.titulo}
                </strong>

                <form onSubmit={conseguirdatosForm}>
                    <input type="text"
                           id='titulo'
                           name='titulo'
                           placeholder="Título" />

                    <textarea 
                              id='descripcion'
                              name='descripcion'
                              placeholder="Descripción"                    
                    />
                    
                    <input 
                           className="boton-guardar"
                           id='save'
                           type="submit"
                           value="Guardar"/>
                </form>

            </div>

  )
}
