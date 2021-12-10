let quadro = document.getElementById('pixel-board');
let vertical = 1;
let horizontal = 1;
let colorPalette = document.getElementById('color-palette');
let color = document.getElementsByClassName('color');

for (let i = 0; i < 5; i++) {
    let div = document.createElement('div')
    div.className = 'linha';
    quadro.appendChild(div)
    for (let j = 0; j < 5; j++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        div.appendChild(pixel);
        horizontal += 1;
    }
}

function removeSelected() {
    for (let i = 0; i < color.length; i++) {
        if (color[i].classList[1] == 'selected') {
            color[i].classList.remove('selected');
            break;
        }
    }
}

function adicionaSelected(clicado) {
    clicado.classList.add('selected');
}

function trocaSelected(event) {
    removeSelected();
    let clicado = event.target;
    adicionaSelected(clicado);
}

color[0].addEventListener('click', trocaSelected);
color[1].addEventListener('click', trocaSelected);
color[2].addEventListener('click', trocaSelected);
color[3].addEventListener('click', trocaSelected);