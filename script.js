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
function newSize() {
    while (quadro.firstChild) {
        quadro.removeChild(quadro.firstChild);
    }
//Essa a parte de cima foi tirada do site da MDN.
    if (input.value == 0) {
        window.alert("Board inválido!");
    } else if (input.value <= 5) {
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
        quadro.style.height = '210px';
        quadro.style.width = '210px';
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = 'white';
        }
    } else if (input.value > 50) {
        for (let i = 0; i < 50; i++) {
            let div = document.createElement('div')
            div.className = 'linha';
            quadro.appendChild(div)
            for (let j = 0; j < 50; j++) {
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                div.appendChild(pixel);
                horizontal += 1;
            }
        }
        quadro.style.height = input.value * 42 + 'px';
        quadro.style.width = input.value * 42 + 'px';
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = 'white';
        }
    } else {
        for (let i = 0; i < input.value; i++) {
            let div = document.createElement('div')
            div.className = 'linha';
            quadro.appendChild(div)
            for (let j = 0; j < input.value; j++) {
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                div.appendChild(pixel);
                horizontal += 1;
            }
        }
        quadro.style.height = input.value * 42 + 'px';
        quadro.style.width = input.value * 42 + 'px';
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