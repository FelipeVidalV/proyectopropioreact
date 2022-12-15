import React from "react"

//se crea el componente TablaAuto
const TablaAuto = () => {
    return (
<div>
        {/* //creo un contenedor para  ordenar la tabla y le agrego el título */}
        <div class = "container" id="tablaAuto">
            <h1>Tabla Auto</h1>
{/* //se crea una tabla para mostrar los datos que ingresaremos en el formulario */}
            <table class="table">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Año</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>

            </table>
        </div>
        {/* //estas son tarjetas que estuve probando por mi cuenta para aprender a posicionarlas en css */}
        <div  id="tarjetas" >
        <div class="card" id="tarjetas" style={{width: '18rem'}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div class="card" id="tarjetas" style={{width: '18rem'}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      </div>
      </div>
    )
}

//se exporta el componente para importarlo en index
export default TablaAuto;