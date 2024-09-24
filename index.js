const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const pizzaNumber = document.getElementById(`pizzaNumber`);
const pizzaPedido= document.querySelector(`.pizzaPedido`);
const pizzaContainer = document.querySelector(`.pizzaContainer`);

// corroboramos que traigamos las cosas del DOM

// console.log(pizzaNumber);
console.log(pizzaPedido);
// console.log(pizzaContainer);

// funcion para mostrar la pizza en el contenedor

const createPizzaCard = (pizza) => {

  const {id, nombre, precio, ingredientes, imagen} = pizza;
  pizzaContainer.innerHTML = `
  <div class="pizza-card">
    <img src= "${imagen}"/>
    <h2> ${nombre}</h2>
    <p> $ ${precio}</p>
    <button> Agrega al carrito</button>
  </div>
 `
};

// funcion para mostrar el error

const mostrarError = (mensaje) =>{
  pizzaContainer.innerHTML = `<p class="error"> ${mensaje}</p>`;
};



// agregamos el evento 

pizzaPedido.addEventListener('submit', (event) => {
  
// con esto prevenimos la recarga de la pagina al enviar el form
  event.preventDefault();

  const idPizza = parseInt(pizzaNumber.value);

// verificamos que el numero en el imput sea correcto

  if (isNaN(idPizza)){
    mostrarError("Ingresa número válido");
    return
  }

// buscamos la pizza por id

const pizza = pizzas.find(piza => piza.id === idPizza);

if (pizza){
  createPizzaCard(pizza);

  // guardamos en localStorage
  localStorage.setItem('ultimaPizza', JSON.stringify(pizza));

} else{
  mostrarError('No se encontro una pizza con el ID seleccionado')
}

});



const init = () =>{
  // Ultima pizza que muestra inicia la pagina
  const pizzaGuardada = localStorage.getItem('ultimaPizza');
  if (pizzaGuardada){
    const pizza = JSON.parse(pizzaGuardada);
    createPizzaCard(pizza);
  }
};

init();