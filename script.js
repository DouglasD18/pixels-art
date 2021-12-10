let quadro = document.getElementById('pixel-board');
quadro.style.display = 'block';
quadro.style.height = '204px'
let vertical = 1;
let horizontal = 1;

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

let linhas = document.getElementsByClassName('linha');
for (let i = 0; i < linhas.length; i++) {
    linhas[i].style.height = '42px';
    linhas[i].style.width = '210px';
}

let estilo = document.getElementsByClassName('pixel');
for (let i = 0; i < estilo.length; i++) {
    estilo[i].style.display = 'inline'
    estilo[i].style.backgroundColor = 'white';
    estilo[i].style.width = '40px';
    estilo[i].style.height = '40px';
    estilo[i].style.border = '1px solid black';
}