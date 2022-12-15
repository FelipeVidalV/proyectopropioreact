import React from "react";
//se crea el componente Botón
const Boton = ({infoBoton,handleOnClick}) => {
    
    return (
        //se crea el botón
        <div>
        <button type="button" 
        class="btn btn-danger"
        onClick={()=>{handleOnClick();
        }}>{infoBoton}</button>
        </div>
    )

}
//se exporta el componente para importarlo en el index
export default Boton;