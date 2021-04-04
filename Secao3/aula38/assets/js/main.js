const container = document.querySelector('.container');
const paragrafos = container.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'rgb(256,256,256)';
}