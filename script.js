const dia = document.getElementById('dia');
const diaSemana = document.getElementById('diaSemana');
const mes = document.getElementById('mes');
const anio = document.getElementById('anio');

const setDia = () => {
    const fecha = new Date();
    dia.textContent = fecha.toLocaleString( 'es',{ day : 'numeric'});
    diaSemana.textContent = fecha.toLocaleString( 'es' , { weekday: 'long'});
    mes.textContent = fecha.toLocaleString ( 'es' , { month: 'short'});
    anio.textContent = fecha.toLocaleString( 'es' , { year: 'numeric'});
}

const agregarTarea = event => {
    event.preventDefault();
    const{value} = event.target.tarea;
    if(!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add ('tarea' , 'borde');
    tarea.addEventListener('click' ,estadoDeTarea);
    tarea.textContent = value;
    contenedorTareas.prepend(tarea);
    event.target.reset();
}

const estadoDeTarea = event => {
    event.target.classList.toggle('realizada');
}

const ordenar = () => {
    const terminada = [];
    const noTerminada = [];
    contenedorTareas.childNodes.forEach(element => {
        element.classList.contains('realizada') ? terminada.push(element) : noTerminada.push(element);
    });
    return [...noTerminada , ...terminada];
}

const ordenarTareas = ()  => {
    ordenar().forEach(element => {
        contenedorTareas.appendChild(element);
    })
}

setDia();