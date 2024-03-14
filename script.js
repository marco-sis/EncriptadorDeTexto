const cajaTexto = document.querySelector(".cajatexto");
const textoResultado = document.querySelector('.texto-resultado');

const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");

const contenedor = document.querySelector(".contenedor-parrafo");
const munieco = document.querySelector(".contenedormunieco");

botonEncriptar.onclick = btnEncriptar;
botonDesencriptar.onclick = btnDesencriptar;

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function btnEncriptar() {
    ocultarAdelante();
    const textoEncriptado = encriptar(cajaTexto.value);
    textoResultado.textContent = textoEncriptado;
    cajaTexto.value = "";
    // textoResultado.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    ocultarAdelante();
    const textoEncriptado = desencriptar(cajaTexto.value);
    textoResultado.textContent = textoEncriptado;
    cajaTexto.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// Boton copiar
const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
});
