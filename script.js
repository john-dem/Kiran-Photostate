/* ---------- ADD PRODUCT ---------- */
function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let desc = document.getElementById("desc").value;

  if (!name || !price) {
    alert("Name and Price required");
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ name, price, desc });
  localStorage.setItem("products", JSON.stringify(products"));

  alert("Product Added ✅");
  loadAdminProducts();

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("desc").value = "";
}

/* ---------- CUSTOMER VIEW ---------- */
function loadCustomerProducts() {
  let list = document.getElementById("customerProductList");
  if (!list) return;

  let products = JSON.parse(localStorage.getItem("products")) || [];
  list.innerHTML = "";

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

/* ---------- ADMIN VIEW ---------- */
function loadAdminProducts() {
  let list = document.getElementById("adminProductList");
  if (!list) return;

  let products = JSON.parse(localStorage.getItem("products")) || [];
  list.innerHTML = "";

  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <b>₹ ${p.price}</b><br><br>
        <button onclick="removeProduct(${i})">❌ Remove</button>
      </div>
    `;
  });
}

/* ---------- REMOVE ---------- */
function removeProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadAdminProducts();
}

/* ---------- AUTO LOAD ---------- */
loadCustomerProducts();
loadAdminProducts();
