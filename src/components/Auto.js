import React from "react";
import'./css/style.css'
import Boton from "./Boton";
import { alpha, styled } from '@mui/material/styles';
import { pink, purple, red } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


//se crea el componente AutoComponent
const AutoComponent = () => {
  //A modo de prueba se utiliza un botón desde bootstrap
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: purple[900],
          '&:hover': {
            backgroundColor: alpha(purple[900], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: purple[900],
        },
      }));
      
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    
    //se utiliza el return para mostrar el contenido
      return (
        //Se agrega un formulario desde bootstrap, se eedita para que solicite info de un auto
    <div class ="container"id="formularioAuto">
        <h1>Formulario de ingreso Auto</h1>
        <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Marca Auto</span>
                <input type="text" class="form-control" placeholder="Nissan" aria-label="Marca" aria-describedby="addon-wrapping"></input>
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Año</span>
                <input type="text" class="form-control" placeholder="2017" aria-label="Año" aria-describedby="addon-wrapping"></input>
            </div>
            <div class="input-group flex-nowrap" id="auto">
                <span class="input-group-text" id="addon-wrapping">Precio</span>
                <input type="text" class="form-control" placeholder="18000000" aria-label="Precio" aria-describedby="addon-wrapping"></input>
            </div>
            {/* Se agrega un botón todavía sin funcionalidad */}
            <div class="boton" id="auto"><Boton  infoBoton={'Agregar auto'}/></div>
                <br/>
                {/* se agrega el switch de prueba */}
                <GreenSwitch {...label} defaultChecked />
    </div>

    )
}
//se exporta el Autocomponent para luego importarlo en el index
export default AutoComponent;