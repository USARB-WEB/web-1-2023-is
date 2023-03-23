let products = [];
console.log(1);


fetch(
    "http://localhost:1337/api/products",
    {
        headers: {
            Authorization: "Bearer 84dedc8ec29ed23d90ded1e297539bfdf52fc10705199e1c0cbc89672100a8e4e2f7c3a3486505141c7c0a9309ae917be1342f0c1ee4cb3248bca1f1c29477597f673bf66f996ea686ab57036610186f4e0563c6978084798e416bdca4be81767aeb64114f62c2cac17c916fbe8124c0accdb8ed56064c48e6d15ac30ff83142"
        }
    }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(2);
    console.log(data)
    products = data;


    const productsContainer = document.getElementById('products');
    products.data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
          <span>${product.attributes.name}<span/>
          <span>${product.attributes.description}<span/>
          <span>${product.attributes.price}<span/>
        `;
        productsContainer.append(productElement);
    });
  });

console.log(3);
console.log(products);