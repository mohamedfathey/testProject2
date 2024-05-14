let product_info = document.querySelector(".product-info");
let productId = localStorage.getItem("selectedId");

(function drawPage() {
    let selectedItem = allProducts.find(item => item.id == productId);
    product_info.innerHTML = `
    <div class="product-img p-0 col-lg-5 col-12 text-sm-center">
    <img src="${selectedItem.img}">
</div>
<div class="product-description col-lg-5 col-12">
  <div class="description-top">
    <h1>${selectedItem.name}</h1>
    <p class="p1">Price: ${selectedItem.price}</p>
  </div>

  <div class="description-bottom">
    <p class="desc fs-5">${selectedItem.desc}</p>
    <p class="p2"> <i class="fa-solid fa-chart-simple"></i><span> Cutting-edge Technology Offers top-notch<br>
        performance and efficiency.</span></p>
    <div class="decore"></div>
    <p class="p3"> <i class="fa-solid fa-camera"></i>
      <span> Advanced Camera Capture stunning photos<br> and videos effortlessly.</span>
    </p>
    <div class="decore"></div>
    <p class="p4"> <i class="fa-solid fa-battery-three-quarters"></i>
      <span> Long Battery Life Keeps you connected <br>throughout the day</span>
    </p>
    <div class="decore"></div>
    <p class="p5"> <i class="fa-solid fa-fingerprint"></i><span>Innovative Features Offers unique<br>
        functionalities for everyday tasks.</span></p>
    <div class="decore"></div>
    <p class="p6"><i class="fa-solid fa-lock"></i> <span>Enhanced Security Features like Face ID <br>ensure your
        data stays safe.</span></p>
    <div class="decore"></div>
  </div>
  <button onclick="addToCart(${selectedItem.id})"> <i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
</div>
    `;
})();

//////////////////////////////////////////////////////////////////

let productMenu = document.getElementById("menu");
let addedItems = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let count = document.getElementById("count");
let cartProduct = document.getElementById("cartProducts");
let cart = document.getElementById("cart");

function addToCart(id) {
    if (!localStorage.getItem("email")) {
        window.location = "login.html";
    } else {
        let product = listProducts.find((item) => item.id == id);
        if (addedItems.some(e => e.id == product.id)) {
            addedItems = addedItems.map(e => {
                if (e.id === product.id) {
                    e.qty++;
                }
                return e;
            });
        } else {
            addedItems.push(product);
        }

        productMenu.innerHTML = "";
        addedItems.forEach(e => {
            productMenu.innerHTML += `<p>${e.name}<span class="float-end">${e.qty}</span></p>`;
        });

        localStorage.setItem("products", JSON.stringify(addedItems));

        let counter = document.querySelectorAll("#menu p");
        count.innerHTML = counter.length;
        count.style.display = "block";
        location.reload();
    }
}

if (addedItems.length > 0) {
    addedItems.map((e) => {
        productMenu.innerHTML += `<p>${e.name}<span class="float-end">${e.qty}</span></p>`;
    });
    count.innerHTML = addedItems.length;
    count.style.display = "block";
}

cart.addEventListener('click', () => {
    if (productMenu.innerHTML !== "") {
        if (cartProduct.style.display == "none") {
            cartProduct.style.display = "block";
        } else {
            cartProduct.style.display = "none";
        }
    }
});