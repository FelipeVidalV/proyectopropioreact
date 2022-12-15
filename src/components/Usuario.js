import React, { useState, useEffect } from "react";
import Boton from "./Boton";
import './css/style.css'

//se crea un usuario inicial para establecer los datos
const initialUsuario = {
    rut: "",
    nombre: "",
    apellido: "",
    mail: ""
};

//se crea el componente UsuarioComponent
const UsuarioComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {


    const [usuario, setUsuario] = useState(initialUsuario);
    const { rut, nombre, apellido, mail } = usuario;
    //el useEffect siempre está pendiente de si la variable que tiene dentro de sus corchetes cambia, el deberá hacer todo lo que tiene en su función dentro
    //useEffect siempre corre al menos una vez cuando la página carga por primera vez
    useEffect(()=>{

      //se le dice que si el usuarioEditado no está vacio lo settee
        if(usuarioEditado!== null){
            setUsuario(usuarioEditado)
            //en caso que sí esté vacío lo deje en blanco 
        }else{
            setUsuario(
                {
                    rut: "",
                    nombre: "",
                    apellido: "",
                    mail: ""
                  }
            )
        }
      },[usuarioEditado]);
    
  

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }



    return (
      //se crea el formulario y se le agregan los datos a cadda input para relacionarlos
        <div class="container" id="formularioUsuario">
            {/* el formulario es dinámico según si existe el usuario */}
            {usuarioEditado!==null ? <h1>Editar Usuario</h1>:<h1>Ingreso de Usuario</h1>}
            
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Nombre</span>
                <input value={rut} onChange={handleInputChange} name="rut" type="text" class="form-control" placeholder="11111111-1" aria-label="Rut" aria-describedby="addon-wrapping"></input>
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Nombre</span>
                <input value={nombre} onChange={handleInputChange} name="nombre" type="text" class="form-control" placeholder="Felipe" aria-label="Nombre" aria-describedby="addon-wrapping"></input>
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Apellido</span>
                <input value={apellido} onChange={handleInputChange} name="apellido" type="text" class="form-control" placeholder="Vidal" aria-label="Apellido" aria-describedby="addon-wrapping"></input>
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Mail</span>
                <input value={mail} onChange={handleInputChange} name="mail" type="email" class="form-control" placeholder="fv@ejemplo.cl" aria-label="Mail" aria-describedby="addon-wrapping"></input>
            </div>

            {/* //se cre un botón dinámico para editar o ingresar ususario según sea el caso si existe o no el usuario */}
            {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}
{/* //se crea botón para cancelar la edición del usuario */}
{usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}



{/* //este es otro botón que estaba usando antes y prferí dejarlo comentado para saber que existe */}
            {/*<div class ="boton" id="usuario"><Boton  infoBoton={'Agregar Usuario'}/></div>*/}
            <br />

        </div>

    )

}
//se exporta el component para importarlo en index
export default UsuarioComponent;