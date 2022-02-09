/* eslint-disable no-param-reassign */
const quadro = document.getElementById('pixel-board');
const color = document.getElementsByClassName('color');
const button = document.getElementById('clear-board');
const btn = document.getElementById('generate-board');
const input = document.getElementById('board-size');

for (let i = 0; i < 5; i += 1) {
    const div = document.createElement('div');
    div.className = 'linha';
    quadro.appendChild(div);
    for (let j = 0; j < 5; j += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        div.appendChild(pixel);
    }
}

function removeSelected() {
    for (let i = 0; i < color.length; i += 1) {
        if (color[i].classList[1] === 'selected') {
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
    const clicado = event.target;
    adicionaSelected(clicado);
}

color[0].addEventListener('click', trocaSelected);
color[1].addEventListener('click', trocaSelected);
color[2].addEventListener('click', trocaSelected);
color[3].addEventListener('click', trocaSelected);

function trocaBackgroundColor(event) {
    const painel = document.querySelector('.selected');
    const cor = getComputedStyle(painel, null).getPropertyValue('background-color');
    const pixel = event.target;
    pixel.style.backgroundColor = cor;
}

const addNewColor = () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('click', trocaBackgroundColor);
    });
};

const turnWhite = () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixelColor) => {
        pixelColor.style.backgroundColor = 'white';
    });
};

button.addEventListener('click', turnWhite);

const clearQuadro = () => {
    quadro.innerHTML = '';
};

const addQuadro = (value) => {
    for (let i = 0; i < value; i += 1) {
        const div = document.createElement('div');
        div.className = 'linha';
        quadro.appendChild(div);
        for (let j = 0; j < value; j += 1) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            div.appendChild(pixel);
        }
    }
    quadro.style.height = `${value * 42}px`;
    turnWhite();
};

function newSize() { 
    clearQuadro();
    if (input.value === 0) {
        window.alert('Board inválido!');
        addQuadro(5);
    }
    if (input.value <= 5) {
        addQuadro(5);
    } else if (input.value > 50) {
        addQuadro(50);
    } else {
        addQuadro(input.value);
    }
    input.value = '';
    addNewColor();
}

btn.addEventListener('click', newSize);

function gerarCores(cor) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    cor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
} 

const changeColors = () => {
    gerarCores(color[0]);
    gerarCores(color[1]);
    gerarCores(color[2]);
    gerarCores(color[3]);
    addNewColor();
};

document.addEventListener('DOMContentLoaded', changeColors);
