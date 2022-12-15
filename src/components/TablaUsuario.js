import React from "react"
import'./css/style.css'
import Boton from "./Boton"

const TablaUsuario = ({usuarios, deleteUser, setUsuarioEditado}) => {
    return (

        <div class = "container" id="tablaUsuario" >
            <h1>Tabla Usuario</h1>

            <table class="table">

                <thead>
                    <tr>
                        <th scope="col">Rut</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario)=>(
                        <tr>
                        <td>
                            {usuario.rut}
                        </td>
                        <td>
                            {usuario.nombre}
                        </td>
                        <td>
                            {usuario.apellido}
                        </td>
                        <td>
                            {usuario.mail}
                        </td>
                        <td>
                        <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.rut);
                  }}
                >
                 Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario);
                  }}
                >
                 Editar
                </button>

                        </td>
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
};
export default TablaUsuario;