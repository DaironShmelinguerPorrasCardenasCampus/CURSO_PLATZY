const API = 'http://localhost:3000';

function AgragrDatos(urlApi , datos){ //FUNCION CON MÉTODO POST
    const response = fetch(urlApi , {
        method: 'POST',
        mode: 'cors', // cors => compartir recursos entre diferentes origenes
        credentials: 'same-origin',
        headers:{ //cabeceras para que nos reconozca el tipo de valor que envia
        'Content-Type': 'application/json' // formato json
        },
        body: JSON.stringify(datos) // me pasa el objeto en formato texto
    });
    return response;
}

const datos =  {
    "id": 5,
    "name": "hollllaa",
    "price": 20,
    "description": "Razer Gaming Mouse",
    "categoryId": 2 
      }

//USO DE LA FUNCIÓN 

AgragrDatos(`${API}/products`, datos)
.then(response => response.json())
.then(datos => console.log(datos))