let appleSection = document.querySelector(".appleSection .products");
let samsungSection = document.querySelector(".samsungSection .products");
let oppoSection = document.querySelector(".oppoSection .products");
let realmeSection = document.querySelector(".realmeSection .products");
let xiaomiSection = document.querySelector(".xiaomiSection .products");
let huaweiSection = document.querySelector(".huaweiSection .products");
let otherSection = document.getElementById("otherSection");

function drawPage() {
    let addapple = apple.map(product => {
        return `<div class="card text-center" style="width: 18rem;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`;
    });
    appleSection.innerHTML = addapple.join("");

    let addsamsung = samsung.map(product => {
        return `<div class="card text-center" style="width: 18rem;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`;
    });
    samsungSection.innerHTML = addsamsung.join("");

    let addoppo = oppo.map(product => {
        return `<div class="card text-center" style="width: 18rem;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`;
    });
    oppoSection.innerHTML = addoppo.join("");

    let addrealme = realme.map(product => {
        return `<div class="card text-center" style="width: 18rem;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`;
    });
    realmeSection.innerHTML = addrealme.join("");

    let addxiaomi = xiaomi.map(product => {
        return `<div class="card text-center" style="width: 18rem;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`;
    });
    xiaomiSection.innerHTML = addxiaomi.join("");

    let addhuawei = huawei.map(product => {
        return `<div class="card text-center" style="width: 18rem;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`;
    });
    huaweiSection.innerHTML = addhuawei.join("");

    let addother = other.map((product)=>{
        return `<div class="card text-center d-flex" style="width: 20rem;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`
    });
    otherSection.innerHTML = addother.join("");
};
drawPage();

let productMenu = document.getElementById("menu");
let addedItems = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let count = document.getElementById("count");
let cartProduct = document.getElementById("cartProducts");
let cart = document.getElementById("cart");

function addToCart(id) {
    if (!localStorage.getItem("email")) {
        window.location = "login.html";
    } else {
        let product = allProducts.find((item) => item.id == id);
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

function showDetails(id) {
    window.location = "details.html";
    localStorage.setItem("selectedId", id);
}

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let allpage = document.querySelector(".allpage");
let result = document.querySelector(".searchResult");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (searchInput.value.trim() === "") {
        allpage.style.display = "block";
        result.style.display = "none";
    } else {
        search(searchInput.value, allProducts);
    }
});

searchInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (searchInput.value.trim() === "") {
        allpage.style.display = "block";
        result.style.display = "none";
    } else {
        search(searchInput.value, allProducts);
    }
});

function search(title, arr) {
    let myarr = arr.filter((item) => item.name.toLowerCase().indexOf(title.toLowerCase()) > -1);
    searchResult(myarr);
}

function searchResult(arr) {
    allpage.style.display = "none";
    result.style.display = "flex";
    let html = "";
    for (const product of arr) {
        html += `<div class="card text-center p-0" style="width: 400px !important; margin-top: 100px;">
        <img onclick="showDetails(${product.id})" class="card-img-top p-3" src="${product.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${product.id})" class="card-title">${product.name}</h5>
            <p class="card-text desc">${product.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
            <div class="d-flex justify-content-evenly align-items-center mt-3">
                <button onclick="addToCart(${product.id})" class="btn btn-outline-secondary rounded-4">Add to Cart</button>
                <span onclick="addToFav(${product.id})"><i class="fa-solid fa-heart fs-4 text-secondary" style="color: ${product.liked == true ? 'red !important' : ''}"></i></span>
            </div>
        </div>
    </div>`;
    }
    result.innerHTML = html;
}

let favItems = localStorage.getItem("favItems") ? JSON.parse(localStorage.getItem("favItems")) : [];
let favCount = document.getElementById("favCount");

function addToFav(id) {
    if (!localStorage.getItem("email")) {
        window.location = "login.html";
    } else {
        let product = allProducts.find((item) => item.id == id);
        product.liked = true;

        if (!favItems.find(e => e.id == product.id)) {
            favItems.push(product);
        }

        localStorage.setItem("favItems", JSON.stringify(favItems));

        favCount.innerHTML = favItems.length;
        favCount.style.display = "block";

        allProducts.map(e => {
            if (e.id === product.id) {
                e.liked = true;
            }
        });

        if (allpage.style.display == "none") { search(searchInput.value, allProducts); }

        drawPage();
    }
}

if (favItems.length > 0) {
    favItems.map(item => {
        allProducts.map(e => {
            if (e.id === item.id) {
                e.liked = true;
            }
        });
    });
    drawPage();
    favCount.innerHTML = favItems.length;
    favCount.style.display = "block";
}

let fav = document.getElementById("fav");

fav.addEventListener('click', function () {
    if (favItems.length > 0) {
        window.location.href = "favourite.html";
    }
});

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".appleSection", {});
sr.reveal(".samsungSection", { delay: 100 });
sr.reveal(".oppoSection", { delay: 100 });
sr.reveal(".realmeSection", { delay: 100 });
sr.reveal(".xiaomiSection", { delay: 100 });
sr.reveal(".huaweiSection", { delay: 100 });
sr.reveal(".otherSection", { delay: 100 });