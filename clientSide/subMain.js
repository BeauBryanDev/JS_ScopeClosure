
const products = [
    { title: 'Burger', price: 121 },
    { title: 'Pizza', price: 20 },
    { title: 'Soda', price: 5 },
  ];

  const app = document.getElementById('myApp3')

products.forEach(product => {
  app.innerHTML += `<li>${product.title} -$ ${product.price}</li>`
});


