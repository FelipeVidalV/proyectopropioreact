import React from "react"

const TablaAuto = () => {
    return (
<div>
        <div class = "container" id="tablaAuto">
            <h1>Tabla Auto</h1>

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
export default TablaAuto;