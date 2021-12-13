let quadro = document.getElementById('pixel-board');
let vertical = 1;
let horizontal = 1;
let colorPalette = document.getElementById('color-palette');
let color = document.getElementsByClassName('color');
let pixels = document.getElementsByClassName('pixel');
let button = document.getElementById('clear-board');
let btn = document.getElementById('generate-board');
let input = document.getElementById('board-size');
let linhas = document.getElementsByClassName('linha');

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

function trocaBackgroundColor(event) {
    let painel = document.querySelector('.selected');
    let cor = getComputedStyle(painel, null).getPropertyValue("background-color");
    let pixel = event.target;
    pixel.style.backgroundColor = cor;
}

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', trocaBackgroundColor);
}

button.addEventListener('click', function(){
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white';
    }
})

btn.addEventListener('click', newSize);
function mudaSize() {
    if (parseInt(input.value, 10) < 5) {
        let valor = '5px';
        let valorLinha = '7px';
        for (let i = 0; i < 5; i++) {
            linhas[i].style.height = valorLinha;
        }
        let valorQuadro = '25px';
        quadro.style.height = valorQuadro;
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.height = valor;
            pixels[i].style.width = valor;        
        }
    } if (parseInt(input.value, 10) > 50) {
        let valor = '50px';
        let valorLinha = '52px';
        for (let i = 0; i < 5; i++) {
            linhas[i].style.height = valorLinha;
        }
        let valorQuadro = '250px';
        quadro.style.height = valorQuadro;
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.height = valor;
            pixels[i].style.width = valor;
        }
    } else {
        let valor = input.value + 'px';
        let valorLinha = (parseInt(input.value, 10) + 2) + 'px';
        for (let i = 0; i < 5; i++) {
            linhas[i].style.height = valorLinha;
            console.log(linhas[i]);
        }
        let valorQuadro = (input.value * 5) + 'px';
        quadro.style.height = valorQuadro;
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.height = valor;
            pixels[i].style.width = valor;
        }
    }
}

function newSize() {
    if (input.value === '') {
        window.alert('Board inválido!');
    } else {
        mudaSize();
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = 'white';
        }
    }
}

function gerarCores(cor) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    cor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
} 

document.addEventListener('DOMContentLoaded', function(){
    gerarCores(color[1]);
    gerarCores(color[2]);
    gerarCores(color[3]);
})