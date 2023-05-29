//PRIMERA PREENTREGA

/*let edad = prompt ("Bienvenido a WatchArg, necesitamos verificar su edad para continuar") 
if (edad >= 18) {
reso = "Gracias por su información, continue por favor";}
else {(edad <= 18) 
   reso = "Es menor de edad, algunas imagenes de Smartwatch estarán restringidas, continue";}

alert(reso)

let Smartwatch = prompt(`
¿Qué smartwatch Preferis?
1: Sumergible
2: Con Almacenamiento
3: Con GPS
4: Con música
`)

switch (Smartwatch) {
    case "1":
        console.log("Sumergible")
        
        break;
    case "2":
        console.log("Con Almacenamiento")
        
        break;
    case "3":
        console.log("Con GPS")
            
            break;
    case "4":
        console.log("Con música")
                
                break;
    default:
        console.log("Ninguna opcion válida")
        break;}

 

       let nombre = prompt("Ingresá tu nombre y te dejamos 5 tips de smartwatch")

       for (let i = 0; i < 5; i++) {
        let mensaje;
        if (i === 0) {
          mensaje = '1: Comprá en tiendas oficiales';
        } else if (i === 1) {
          mensaje = 'Usa la App original'; 
        } else if (i === 2) {
          mensaje = 'Usa el cargador original';
        } else if (i === 3) {
          mensaje = 'Vincula sin bluetooth';
        } else {
          mensaje = 'No lo sumerjas en agua salada';
        }
        alert(mensaje);
      }


let usuario = prompt ("Por último, cree su usuario, ingrese el nombre")
let contrasena = prompt ("ingrese su contraseña")

function registro (usuario, contrasena) {
const texto = "Su nombre de usuario es: " + usuario + " y su contraseña es: " + contrasena
return texto
}

const saludo = registro(usuario, contrasena)

alert(saludo)
 
alert("Gracias por visitarnos!")*/


/*
const carrito =[
  {nombre:"Smartwatch Samsung", precio:12000},
  {nombre:"Smartwatch Motorola", precio:15000},
  {nombre:"Smartwatch West", precio:20000},
]
*/

//ACA COMIENZA LA SEGUNDA PREENTREGA
let edad = prompt ("Bienvenido a WatchArg, necesitamos verificar su edad para continuar") 
if (edad >= 18) {
reso = "Gracias por su información, continue por favor";}
else {(edad <= 18) 
   reso = "Es menor de edad, algunas imagenes de Smartwatch estarán restringidas, continue";}
   alert(reso)

  //Array con objetos
const productos = [
  { modelo: "Apple Watch Series 6", precio: 4000 },
  { modelo: "Samsung Galaxy Watch Active2", precio: 2000 },
  { modelo: "Fitbit Versa 3", precio: 17000 },
  { modelo: "Garmin Forerunner 945", precio: 5000 },
];
  const envio = [
    { Tipo: "Full", precio: 700 },
    { Tipo: "Común", precio: 500 },
  ];
 
//Metodos
productos.map (productos => productos.modelo)
const tiposEnvio = envio.map(envio => envio.Tipo);

//Array vacios
const carrito = []
const enviofinal = [];

//Interacción con usuarios, bucles y metodos
let seleccion = prompt("Elige el Smartwatch que desee:\n\n" +
  "1. Apple Watch Series 6\n" +
  "2. Samsung Galaxy Watch Active2\n" +
  "3. Fitbit Versa 3\n" +
  "4. Garmin Forerunner 945\n")

  seleccion = parseInt(seleccion) ; 

  if (seleccion >= 1 && seleccion <= productos.length) {
    const productoSeleccionado = productos[seleccion - 1].modelo;
    carrito.push(productoSeleccionado);
  
    alert("El producto que elegiste para comprar es: " + productoSeleccionado);
  } else {
    alert("Selección inválida");
  }
  
  
  let tipodeenvío = prompt("Elige el tipo de envío:\n\n" +
    "1. Envío Full \n" +
    "2. Envío Común \n");
  
  tipodeenvío = (tipodeenvío);
  
  
  
  if (tipodeenvío >= 1 && tipodeenvío <= tiposEnvio.length) {
    const envioseleccionado = tiposEnvio[tipodeenvío - 1];
    enviofinal.push(envioseleccionado);
  
    alert("El tipo de envío seleccionado es: " + envioseleccionado);
  } else {
    alert("El tipo de envío es Envío Full por defecto");
  }
  
  
//Función

let envioseleccionado = carrito;
let productoSeleccionado = enviofinal; 


let MontoFinal = prompt("desea ver el monto final \n\n "+
"1. Si \n "+
"2. No \n");

MontoFinal = parseInt(MontoFinal);

if (MontoFinal === 1) {
  const calcularTotal = (envioseleccionado, productoSeleccionado) => {
    return envioseleccionado + productoSeleccionado;
  };
  alert("El carrito posee: " + envioseleccionado + " + " + productoSeleccionado);}
  else{
    alert("gracias por tu visita, el link del carrito ha sido enviado al mail")
  }
 








  

  





