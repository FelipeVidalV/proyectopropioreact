import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage, AutoPage } from './pages';
 
//esto eran pruebas personales
//Aqui importamos nuestra imagen
/* import perroblanco from './img/perroblanco.jpg'; */

const App = ()=>{
    return(
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Auto" element={<AutoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    //Más pruebas personales
   /*  <div>
      <h1>Cosas que aman los perritos</h1>
      <section>
        <h2>nosotros amamos los perritos</h2>
        
        <p>Click aquí para ver más <a target="_blank" rel='noreferrer' href="https://es.123rf.com/imagenes-de-archivo/perros_tiernos.html">fotos de perritos</a>.</p>
        
      </section>
      <section>
        <h2>Cosas que debes saber</h2>
        <h3>Los perritos aman:</h3>
        <ul>
          <li>cariños en la guatita</li>
          <li>juguetes nuevos</li>
          <li>subirse al sillón</li>
        </ul>
        <figure>
        
          <figcaption>Los perritos <em>aman</em> jugar contigo.</figcaption>  
        </figure>
        <h3>Cosas que los perritos odian:</h3>
        <ol>
          <li>instrucciones contradictorias</li>
          <li>bañarse seguido</li>
          <li>cortarse las uñas</li>
        </ol>
        <figure>
          <img src= {perroblanco} alt ='perrito blanco tierno'></img>
          <figcaption>Los perritos <strong>odian</strong> los olores fuertes.</figcaption>  
        </figure>
      </section>
     
    </div> */
    )

}
//exportamos App
export default App;