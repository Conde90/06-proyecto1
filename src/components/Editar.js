import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar película";

    const guardarEdicion = (e, id) => {
      e.preventDefault();
      //alert(id); para ver que se captura el id

      //Conseguir el target del evento
      let target = e.target;
      //console.log(target);

      //Buscar el índice del objeto de la película a actualizar
      const pelis_almacenadas = conseguirPeliculas();
      //console.log(pelis_almacenadas);
      const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
      //console.log(indice);

      //Crear objeto con el id de ese índice, con el título y descripcion del formulario
      let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }
      //console.log(peli);

      //Actualizar el elemento con ese índice
      pelis_almacenadas[indice] = peli_actualizada;
      //console.log(pelis_almacenadas);

      //Guardar el nuevo objeto en el localStorage
      localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

      //y actualizar estados
      setListadoState(pelis_almacenadas);
      //para cerrar el formulario Editar (desmontar el componente Editar)
      setEditar(0);



    }

  return (

    <div className='edit_form'>
        <h3 className='titulo'>{titulo_componente}</h3>
        
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text"
            name='titulo'
            className='titulo_editado'
            defaultValue= {peli.titulo}
            />

            <textarea name="descripcion"
            defaultValue= {peli.descripcion}
            className='descripcion_editada'
            />

            <input type="submit" className='editar' value="Actualizar" />
        </form>
    </div>
  )
}
