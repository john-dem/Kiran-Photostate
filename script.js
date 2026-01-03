function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let desc = document.getElementById("desc").value;

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({ name, price, desc });
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product Added Successfully!");
}

let list = document.getElementById("productList");
if (list) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <b>₹ ${p.price}</b>
      </div>
    `;
  });
}
