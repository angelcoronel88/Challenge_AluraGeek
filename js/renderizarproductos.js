
import { productoGet, deleteProduct } from './api.js';

const productContainer = document.querySelector('.contenedor');

const createProductCard = (product) => {
  const card = document.createElement('div');
  card.classList.add('tarjeta');

  card.innerHTML = `
    <div class="cuerpo">
      <img src="${product.imagen}" alt="Producto" class="img-producto">
      <p>${product.nombre}</p>
      <div>
        <p>${product.precio}</p>
        <button class="delete-btn" data-id="${product.id}">Eliminar</button>
      </div>
    </div>
  `;

  const deleteButton = card.querySelector('.delete-btn');
  deleteButton.addEventListener('click', async () => {
    await deleteProduct(product.id);
    card.remove();
  });

  return card;
};

const renderProducts = async () => {
  const products = await productoGet();
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
};

document.addEventListener('DOMContentLoaded', renderProducts);
