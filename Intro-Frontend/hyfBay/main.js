console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const getProducts = document.getElementById("products");
function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const newList = document.createElement("li");
    newList.innerHTML = `Name: ${products[i].name} , Price: ${products[i].price}, Rating : ${products[i].rating}`;
    getProducts.appendChild(newList);
  }
}

renderProducts(products);
