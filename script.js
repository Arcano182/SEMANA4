const input = document.getElementById('urlImagen');
const btnAdd = document.getElementById('btnAgregar');
const btnDel = document.getElementById('btnEliminar');
const galeria = document.getElementById('galeria');
let seleccionada = null;

btnAdd.onclick = () => {
    if (input.value !== "") {
        const img = document.createElement('img');
        img.src = input.value;
        img.onclick = () => {
            if (seleccionada) seleccionada.classList.remove('seleccionada');
            seleccionada = img;
            seleccionada.classList.add('seleccionada');
        };
        galeria.appendChild(img);
        input.value = "";
    }
};

btnDel.onclick = () => {
    if (seleccionada) {
        seleccionada.remove();
        seleccionada = null;
    }
};

document.onkeydown = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") btnDel.click();
};
