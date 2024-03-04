//crear elemento h1 y establecer texto
var heading = document.createElement('h1');
heading.textContent = 'Test Git';

//Crear el div contenedor
var container = document.createElement('div');
container.id = 'container';

//Crear los divs internos con clase 'box'
for(var i = 1; i <=4; i++){
    var box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
}  

//Añadir el h1 al cuerpo del documento
document.body.appendChild(heading)


//Añadir el div contenedor al cuerpo del documento
document.body.appendChild(container)