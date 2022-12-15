import React from "react"
import'./css/style.css'
import Boton from "./Boton"

//se crea el componente TablaUsuario
const TablaUsuario = ({usuarios, deleteUser, setUsuarioEditado}) => {
    return (
        //agrego un contenedor para ordenar la tabla y agrego título
        <div class = "container" id="tablaUsuario" >
            <h1>Tabla Usuario</h1>
{/* //se crea la tabla para mostrar datos del usuario */}
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

                            {/* //se crea botón para eliminar ususario asociado al rut utilizando deleteUser */}
                        <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.rut);
                  }}
                >
                 Eliminar
                </button>

                {/* //Se crea botón para editar usuario asociado a todos los datos del usuario, usando setUsuarioEditado */}
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

//se exporta el componente para importalo al index
export default TablaUsuario;