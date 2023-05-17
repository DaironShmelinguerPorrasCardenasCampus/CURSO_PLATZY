
//ESTRUCTURA PROMESAS 
const cows = 9 ;

const countCows = new Promise(function(resolve , reject){
    if (cows > 10){
        resolve(`SE TIENE EL MINIMO DESEADO DE VAQUITAS :), HAY ${cows}`)
    }else{
        reject("NO HAY TANTAS VAQUITAS :(")
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(()=>{
    console.log('FINALLY');
})