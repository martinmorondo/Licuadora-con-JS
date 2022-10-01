let estadoLicuadora = "apagada";
let licuadora = document.getElementById('blender');
let botonLicuadora = document.getElementById('blender-button');
let sonidoLicuadora = document.getElementById('blender-sound');
let botonSonidoLicuadora = document.getElementById('blender-button-sound');

botonLicuadora.addEventListener('click', () => {
    if(estadoLicuadora === "apagada") {
        estadoLicuadora = "encendido";
        hacerSonido();
        licuadora.classList.add('active');
    } else {
        estadoLicuadora = "apagada";       
        hacerSonido();
        licuadora.classList.remove('active');
    }
})

const hacerSonido = () => {
    if(sonidoLicuadora.paused) {
        botonSonidoLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonSonidoLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
