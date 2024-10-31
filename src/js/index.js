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

const renderTime = () => {
    root.render(<Home time={seconds} />);
};

// Intervalo de incremento
const incrementInterval = setInterval(() => {
    renderTime();
    seconds++;
    console.log('Incrementando:', seconds);

    // Cambia a decremento cuando llegue a 10
    if (seconds >= 21) {
        clearInterval(incrementInterval); // Detenemos el incremento
        startDecrement(); // Iniciamos el decremento
    }
}, 1000);

// Función para iniciar el decremento
function startDecrement() {
    setInterval(() => {
        if (seconds > 0) {
            seconds--;
            renderTime();
            console.log('Decrementando:', seconds);
        }
    }, 1000);
}
