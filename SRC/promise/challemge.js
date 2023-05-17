 // modulo de fetch en terminal - pones npm i node-fetch en consola
const API = 'http://localhost:3000'; // creacion de variable para la url de la api

// creación de la función

function fechData(urlApi){
    return fetch(urlApi); // el llamado de fecth con el elemeto urlApi
};

//LLAMADO DE FETCHDATA - fetch ya es una promesa
//TRAER TODOS LOS PRODUCTOS
fechData(`${API}/products`) // le pasamos la api que queremos llamar
.then(response => response.json()) // se usa then para saber qué hay en la respuesta, y esa respuesta la transfroma en json
.then(products => { //mostrar los productos
    console.log(products);
})
.catch(error => console.log(error));

//TRAER CATEGORÍAS
fechData(`${API}/categories`) // le pasamos la api que queremos llamar
.then(response => response.json()) // se usa then para saber qué hay en la respuesta, y esa respuesta la transfroma en json
.then(categories => { //mostrar los productos
    console.log(categories);
})
.catch(error => console.log(error));
