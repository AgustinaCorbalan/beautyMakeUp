/*LLEGAMOS AL ARCHIVO .JS 😨 QUE MIEDOO... NO MENTIRA! LO AMAMOSS 💚 */
/*Para qué necesitamos javascript? bueno basicamente nos ayuda muchísimo con el funcionamiento de la app, permite que interactuamos y sea más dinámica*/
/*Sin más preambulos, veamos lo que son las variables: En criollo, son como cajones donde guardamos cosas, qué cosas? datos, qué tipo de datos? pueden ser númericos, texto(string), booleanos(false,true), objetos, etc. Podemos acceder, usarlas, referenciarlas y modificarlas.
para declararla lo hacemos de esta manera: "let nombre;" sería como nombrar a ese "cajón" (dato importante: el nombre de la letiable debe ser lo más descriptivo posible, es decir, que con solo ver el nombre, ya tengas una idea de lo qu está almacenando)
para definirla, es decir, asignarle un valor (que es lo que vas a almacenar en ese "cajón") se hace de esta manera: usamos el operador "=", en este caso, creamos la letiable nombre, por lo tanto --> nombre = "Homero" *
hay tres formas para crear variables --> con: var, let y const
breve explicación de cada una: var: puede re-declararse osea, a la variable nombre que declaré puedo modificarla: var nombre = "Marge" (vas a pensar que hay dos variables llamadas igual, pero tranqui que no va a dar ningún error, se va a quedar con la última declara osea la "pisa". 
Podemos cambiar el valor sin problemas osea: nombre = "Bart".
Tiene ámbito/contexto global: osea que puedo acceder en cualquier momento y lugar (y por esto ya se dejó de usar, puede generar accidentes en el código) por lo que lo más recomendable es usar let --> 
let: no puede re-declararse, si probamos lo mismo que hicimos var vamos a tener este error: "has already been declared" osea ese nombre ya está usado digamos.
Puede reasignarse como var. y tiene alcance local o de función.
const: no puede re-declararse. pasa lo mismo que con let. 
no puede reasignarse. como el nombre lo dice "constante" nunca cambia. Si lo intentamos tenemos un “TypeError: Assignment to constant variable”.
y también tiene alcance local o de función. hay más diferencias pero estas son las más importantes.
aah importante! javascript, Case Sensitive, osea, diferencia entre mayúsculas y minúsculas, así que ojo con eso! 👀

/*Bueno ahora si*/
/*Vamos a crear un modal para nuestro formulario de contacto, ¿qué es un modal? es una ventana emergente que se activa cuando el usuario hace clic en un enlace o presiona un botón y no puede interactuar con el fondo hasta que lo cierre*/
/*para crearlo necesitamos dos "cajitas" (previamente definido en el html) una va a ser el modal, osea la ventana y la otra va a ser, la que la contiene (modal-container) */
let modal = document.querySelector(".modal-container"); // acá estamos declarando una variable modal que va a almacenar, en este caso el selector css de clase, cómo lo obtuvimos? primero accedemos a toooodos los metodos que brinda el DOM con "document."(document object model: basicamente tooda la estructura del html) y querySelector es un método en JavaScript que se utiliza para seleccionar los elementos html utilizando selectores CSS. Podemos acceder y modificarlos, en este caso, accedimos al contenedor del modal (lo que hablamos arriba)
let openModal = document.querySelector("#contact-button"); // por acá lo mismo, accedo y obtengo el selector ID css del botón para abrir el formulario.
let closeModal = document.querySelector("#close-button"); // Lo mismo, guardo en la variable closeModal (que al ser descriptivo ya te das una idea para que lo voy a usar verdad? guiño guiño)
let inputNombre = document.querySelector('input[name="name"]'); // Por acá voy a guardar en la variable inputNombre, el atributo name del input (definido en el html). osea, como en un formulario hay varios inputs, necesito una forma para identificarlos, si ya sé, puedo usar el id, peeeero más abajo vas a entender por qué accedí con atributos
let inputApellido = document.querySelector('input[name="lastName"]');
let inputMail = document.querySelector('input[name="mail"]');

openModal.addEventListener("click", function (event) {
  // por acá estamos usando el metodo addEventListener (metodo que brinda el document.) pará que sirve? lo que hace es "escuchar" cuando sucede un evento, osea cuando pasa una acción en el dom, señal de que algo pasó en este casó va a estar atento a un "click".
  event.preventDefault(); // event es el objeto que va a "gestionar/escuchar" la acción, y preventDefault va a prevenir un comportamiento por defecto en la app, osea va a prevenir que se abra por ej el modal sin haber hecho click todavia.
  modal.classList.add("active"); // modal es la variable creada en la linea 19, y yo ahora estoy accediendo a sus metodos que almacené previamente. y le estoy agregando la clase active en css al modal donde voy a establecer el estilo para mostrar el modal cuando se haga click en el botón.
});

closeModal.addEventListener("click", (event) => {
  // por acá lo mismo pero voy remover osea "limpio" todo el estilo cuando hago click en otro botón.
  event.preventDefault();
  modal.classList.remove("active");
  inputNombre.value = ""; // y acá estoy accediendo al valor del input que pide el nombre del usuario, osea accedo a lo que el usuario escribe en el campo y al cerrar el modal limpia todos los campos.
  inputApellido.value = "";
  inputMail.value = "";
});

let formatoMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // guardo en esta variable un expresion regular, es bastante amplia la explicación pero basicamente son formatos preestablecidos para validar comunmente un formulario, (claramente existen un montón de formatos para validaciones, este por ej es para validar un correo electronico que tenga un @, un . y texto)

// por acá tenemos una función, (bah ya nos habiamos topado con una pero era anonima y no me servia la explicación 😬) qué es? es un bloque de codigo que en este caso va de la linea 44 a la 46, que realiza una acción determinada y la puedo ejecutar (poner en práctica) en cualquier momento.
function validarTexto(texto) {
  // se crea con la palabra "function"seguido de un nombre (de nuevo, DESCRIPTIVO, que me diga que es lo que hace) y puede contener o no, un parametro "(texto)" en este caso, es una variable que se le pasa como entrada, osea por ejemplo, una maquina de helado, su función va a hacer toodo el proceso de creación de helado, y la crema o leche (no sé) va a hacer el parametro que va a entrar para pasar por ese proceso y devuelve (return) el preducto final (helado)
  return /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(texto); // pero en este caso va a recibir un texto (el valor del input que el usuario va a escribir en el campo) y va a devolver true, en caso de que el texto cumpla con la validación y sino devuelve false. (.test() es un metodo de las expresiones regulares)
}

function inputVacío(value) {
  // en este caso, esta función devuelve true si el campo del input está vacío (.trim metodo de string osea texto, elimina espacios en blanco si los tuvise por ej si le pasa un string que diga "ho la" elimina ese espacio y lo convierte en "hola")
  return value.trim() === "";
}

function enviarFormulario(event) {
  // acá tenemos la función que va a generar el envío del formulario, se le pasa el event que va a ser el click del botón "enviar y por dentro tiene muchas validaciones, veamos.."
  event.preventDefault();

  let nombre = document.getElementById("name").value; // por acá guardamos en la variable nombre, el valor del input que obtengo con document.getElementById similiar a querySelector pero getElementById hace referencia a un elemento que tenga un id único.
  let apellido = document.getElementById("lastName").value;
  let mail = document.getElementById("mail").value;

  if (inputVacío(nombre) || inputVacío(apellido) || inputVacío(mail)) {
    // por acá escotramos una estructura if, else if.. que son? condicionales, osea ejecuta una sentencia (osea lo que tiene que hacer) si una condición es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.
    // en este caso, evalua si los input nombre, ó apellido ó mail están vacios osea si su valor está vacío
    inputNombre.setAttribute("placeholder", "Debe ingresar su nombre"); // si es verdadero, y por acá volvemos a lo que decía en la linea 23, por qué usé el atributo y no el id, con el atributo, puedo acceder al metodo setAttribute, que me va a permitir modificar el atributo "placeholder" en este caso para mostrar un mensaje de advertencia en caso de que no se cumpla la condición.
    inputApellido.setAttribute("placeholder", "Debe ingresar su apellido");
    inputMail.setAttribute("placeholder", "Debe ingresar su mail");
  } else if (!validarTexto(nombre)) {
    // si no, si (es lo que dice el condicional) el usuario escribe en el campo, caracteres especiales como @-, etc, o números (esto lo comprueba ejecutando la función "validarTexto()" genera otro mensaje como placeholder (mensaje sobre el campo que desapacere al escribir))
    inputNombre.setAttribute("placeholder", "Ingrese un nombre válido");
    inputNombre.value = "";
  } else if (!validarTexto(apellido)) {
    inputApellido.setAttribute("placeholder", "Ingrese un apellido válido");
    inputApellido.value = "";
  } else if (!formatoMail.test(mail)) {
    inputMail.setAttribute("placeholder", "Ingrese un mail válido");
    inputMail.value = "";
  } else {
    window.location.replace("./Pages/form.html"); // cuando termina de evaluar todas las condiciones, finalmente devuelve el resultado que sería en este caso, enviar el formulario al enlace seleccionado
  }
}
