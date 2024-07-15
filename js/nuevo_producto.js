// js/createProduct.js
import { crearProducto } from './api.js';

const form = document.querySelector('form[data-form]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const precio = document.querySelector('#precio').value;
  const imagen = document.querySelector('#imagen').files[0];

  const reader = new FileReader();
  reader.readAsDataURL(imagen);

  reader.onload = async () => {
    const newProduct = {
      nombre,
      precio,
      imagen: reader.result
    };

    const createdProduct = await crearProducto(newProduct);
    window.location.reload();
  };
});
