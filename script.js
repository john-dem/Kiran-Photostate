function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let desc = document.getElementById("desc").value;

  if (name === "" || price === "") {
    alert("Please fill required fields");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({ name, price, desc });
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product Added Successfully ✅");

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("desc").value = "";
}

/* LOAD PRODUCTS */
function loadProducts() {
  let list = document.getElementById("productList");
  if (!list) return;

  let products = JSON.parse(localStorage.getItem("products")) || [];
  list.innerHTML = "";

  products.forEach((p, index) => {
    list.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <b>₹ ${p.price}</b><br><br>
        <button onclick="removeProduct(${index})">❌ Remove</button>
      </div>
    `;
  });
}

/* REMOVE PRODUCT */
function removeProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  if (confirm("Are you sure you want to remove this product?")) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
  }
}

loadProducts();
