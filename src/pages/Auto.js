import React, { useCallback } from "react";
import './css/Style.css';
import { useNavigate } from "react-router-dom";




import {AutoComponent,  Boton,  TablaAuto, } from "../components";

const AutoPage = () => {
    const navigate=useNavigate();
    const handleOnClick=useCallback(()=>navigate("/",{},[navigate]))
    return (
        <body class="todofondo">
        <div>
        <div class="row">
        <div class="col">
        <AutoComponent/>
        </div >
        </div >
        
        <hr/>
        <div class="row">
        <div class="col">
            
            <TablaAuto/>
        </div>
        <Boton infoBoton={"Ir a Usuario"} handleOnClick={handleOnClick}/>
    </div>
    </div>
    </body>
        
    )
}
export default AutoPage;