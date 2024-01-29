/* Desafíos */
/* Crea una lista vacía llamada "listaGenerica". */
let listaGenerica = [];

/* Crea una lista de lenguajes de programación 
   llamada "lenguagesDeProgramacion" con los siguientes 
   elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */
let lenguajesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

   /* Agrega a la lista "lenguagesDeProgramacion los siguientes 
   elementos: 'Java', 'Ruby' y 'GoLang'. */
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/* Crea una función que muestre en la consola todos los elementos 
    de la lista "lenguagesDeProgramacion. */
function mostrarLenguajes(){
    for (let i=0;i<lenguajesDeProgramacion.length;i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}

/* Crea una función que muestre en la consola todos los elementos 
    de la lista "lenguagesDeProgramacion en orden inverso. */
function mostrarLenguajesInv(){
    for (let i=lenguajesDeProgramacion.length-1;i>=0;i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}

/* Crea una función que calcule el promedio de los elementos 
    en una lista de números. */
function promedio(){
    var nroSuma=0;
    for (let i = 0; i < lista.length; i++) {        
        nroSuma = nroSuma + lista[i];
    }
    return (nroSuma / lista.length);
}

/* Crea una función que muestre en la consola el número más 
    grande y el número más pequeño en una lista. */
function nroMaxMin() {
    var nroMax = lista[0];
    var nroMin = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > nroMax) {
            nroMax = lista[i];
        }
        if (lista[i] < nroMin) {
            nroMin = lista[i];
        }
    }
    console.log(`El número máximo es ${nroMax}`);
    console.log(`El número mínimo es ${nroMin}`);
}

/* Crea una función que devuelva la suma de todos 
    los elementos en una lista. */
function sumaTotal(){
    var nroSuma=0;
    for (let i = 0; i <= lista.length; i++) {        
        nroSuma = nroSuma + lista[i];
    }
    return (sumaTotal);
}
    
/* Crea una función que devuelva la posición en la lista 
    donde se encuentra un elemento pasado como parámetro, 
    o -1 si no existe en la lista. */
let lista = [1,2,3,4,5,6,7,8,9,0];
function buscaNro(nroBuscado) {
    /* La solución rápida sería:
       return lista.indexOf(nroBuscado); 
    */
for (let i = 0; i < lista.length; i++) {
        if (lista[i] == nroBuscado) {
            return i;
        }        
    }
    return (-1);
}
/* Crea una función que reciba dos listas de números del mismo 
    tamaño y devuelva una nueva lista con la suma de 
    los elementos uno a uno. */
function sumaListas(listaUno,ListaDos) {
    if (listaUno.length == ListaDos.length) {
        var listaTres = [];
        for (let i = 0; i <= listaUno.length; i++) {
            listaTres.push(listaUno[i] + ListaDos[i]);
        }
        return listaTres;
    }else{
        console.log('Las listas no son iguales en longitud.')
    }
}

/* Crea una función que reciba una lista de números y devuelva 
    una nueva lista con el cuadrado de cada número. */
function cuadradoLista(listaUno) {
    var listaDos = [];
    for (let i = 0; i < listaUno.length; i++) {
        listaDos.push(listaUno[i] * listaUno[i]);
    }
    return listaDos;
}