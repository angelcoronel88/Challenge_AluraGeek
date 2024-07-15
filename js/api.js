
const API_URL = 'http://localhost:3000/productos';

export const productoGet = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const crearProducto = async (product) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};
