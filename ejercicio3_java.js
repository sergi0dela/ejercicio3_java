const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const listaPaises = document.createElement('ul');
for (let i = 0; i < paises.length; i++) {
  const elementoLista = document.createElement('li');
  elementoLista.textContent = paises[i];
  listaPaises.appendChild(elementoLista);
}
document.body.appendChild(listaPaises);

const elementoEliminar = document.getElementsByClassName('fn-remove-me')[0];
if (elementoEliminar) {
  elementoEliminar.remove();
}

const coches = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divContenedor = document.querySelector('[data-function="printHere"]');
const listaCoches = document.createElement('ul');
for (const coche of coches) {
  const itemCoche = document.createElement('li');
  itemCoche.textContent = coche;
  listaCoches.appendChild(itemCoche);
}
if (divContenedor) {
  divContenedor.appendChild(listaCoches);
}

const datosPaises = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

datosPaises.forEach(item => {
  const nuevoDiv = document.createElement('div');
  const tituloH4 = document.createElement('h4');
  const imagen = document.createElement('img');

  tituloH4.textContent = item.title;
  imagen.src = item.imgUrl;

  nuevoDiv.appendChild(tituloH4);
  nuevoDiv.appendChild(imagen);
  document.body.appendChild(nuevoDiv);
});