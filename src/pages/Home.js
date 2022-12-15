import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


import { UsuarioComponent, Boton, TablaUsuario } from "../components";

const usuario1=[
    {
    rut:'15785325-8',
    nombre: 'Joseph',
    apellido: 'joestar',
    mail:'jo.jo@gmail.com',
    
}

]

/* const usuario2={
    rut:'157563325-8',
    nombre: 'Josuke',
    apellido: 'Higashikata',
    mail:'jojo@gmail.com',
    
}; */
const HomePage = () => {
    const navigate=useNavigate();
    const handleOnClick=useCallback(()=>navigate("/Auto",{},[navigate]))
    
    const [user, setUser]=useState(usuario1)
    const [usuarioEditado, setUsuarioEditado]=useState(null);


    const userDelete =(rutUsuario)=>{
        const changeUser=user.filter(usuario=>usuario.rut != rutUsuario);
        setUser(changeUser)
    }
    const userAdd=(usuario)=>{
        const addUsuario =[
            //mantener los datos de user y agregar lo que yo entrego aquí (usuario)
            ...user,usuario
        ]
        //luego actualizamos (o setteamos) el state
        setUser(addUsuario);
    }

    const userEdit =(usuarioEditado)=>{
        const editUser=user.map(usuario=>(usuario.rut === usuarioEditado.rut ? usuarioEditado: usuario))
        setUser(editUser);
    }
    return (
        
        <body class="todofondo"  >
            
            <div>
            <div class="row">
                <div class="col">
                    <UsuarioComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
                </div>
                </div>
                
                <hr/>
                <div class="row">
                <div class="col">
                    <TablaUsuario usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
                </div>
                <Boton infoBoton={"Ir a Autos"} handleOnClick={handleOnClick}/>
            </div>
            </div>
            </body>
            

    )
}
export default HomePage;