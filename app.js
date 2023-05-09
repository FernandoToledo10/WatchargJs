
let edad = prompt ("Bienvenido a WatchArg, necesitamos verificar su edad para continuar") 
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
 
alert("Gracias por visitarnos!")
