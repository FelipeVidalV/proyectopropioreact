import React, { useState, useEffect } from "react";
import Boton from "./Boton";
import './css/style.css'


const initialUsuario = {
    rut: "",
    nombre: "",
    apellido: "",
    mail: ""
};


const UsuarioComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
    const [usuario, setUsuario] = useState(initialUsuario);
    const { rut, nombre, apellido, mail } = usuario;
    //el useEffect siempre está pendiente de si la variable que tiene dentro de sus corchetes cambia, el deberá hacer todo lo que tiene en su función dentro
    //useEffect siempre corre al menos una vez cuando la página carga por primera vez
    useEffect(()=>{
        if(usuarioEditado!== null){
            setUsuario(usuarioEditado)
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




            {/*              <div class ="boton" id="usuario"><Boton  infoBoton={'Agregar Usuario'}/></div>
 */}
            <br />

        </div>

    )

}

export default UsuarioComponent;