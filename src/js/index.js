//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seconds = 0
const root = ReactDOM.createRoot(document.getElementById('app')); // Crea la raíz solo una vez

setInterval(() => {
    root.render(<Home time={seconds} />); // Usa root.render() para actualizar el contenido
    seconds++;
    console.log('hola');
}, 1000);


