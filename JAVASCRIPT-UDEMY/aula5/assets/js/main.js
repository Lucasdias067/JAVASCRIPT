//const elemento = [
//    {tag: 'p', texto: 'frase 1'},
//    {tag: 'div', texto: 'frase 2'},
//    {tag: 'footer', texto: 'frase 3'},
//    {tag: 'section', texto: 'frase 4'}
//];
//
//
//const section = document.querySelector('section');
//const div = document.createElement('div') 
//
//for (let i = 0; i < elemento.length; i++){
//    let {tag, texto} = elemento[i];
//    let tags = document.createElement(tag);
//    tags.innerText = texto;
//    div.appendChild(tags);
//}
//
//section.appendChild(div)
//

function random (min, max) {
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

let rand = random(1,30);
while (rand !== 10){
    rand = random(1,30);
    console.log(rand);
}