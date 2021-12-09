/* O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;
A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;
O quadro de "pixels" deve aparecer abaixo da paleta de cores.
O que será verificado:
Verifica se o quadro de pixels possui o id denominado pixel-board
Verifica se cada pixel individual dentro do quadro possui a classe denominada pixel.
Verifica se a cor inicial dos pixels dentro do quadro, ao abrir a página, é branca.
Verifica se o quadro de pixels aparece abaixo da paleta de cores */

let quadro = document.getElementById('pixel-board');
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
    linhas[i].style.display = 'inline';
}

let estilo = document.getElementsByClassName('pixel');
for (let i = 0; i < estilo.length; i++) {
    estilo[i].style.backgroundColor = 'white';
    estilo[i].style.padding = '25px';
}