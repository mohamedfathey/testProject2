content = document.querySelector(".sec-content");
getproducts = localStorage.getItem("products");

if (getproducts) {
    products = JSON.parse(getproducts);
    draw(products);
}

function draw(data) {
    if(data.length === 0){
        setTimeout(() => {
            window.location = "index.html";
        }, 500);
    }
    let newdata = data.map((item) => {
        return `<div class="card text-center p-0" style="width: 19rem; height: auto;">
        <img onclick="showDetails(${item.id})" class="card-img-top p-3" src="${item.img}" alt="Card image" style="height: 300px;">
        <div class="card-body">
            <h5 onclick="showDetails(${item.id})" class="card-title">${item.name}</h5>
            <p class="card-text desc">${item.desc}</p>
            <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
            <p>Quantity: ${item.qty}</p>
            <button onclick="remove(${item.id})" class="btn btn-outline-danger rounded-4">Remove From Cart</button>
        </div>
    </div>`;
    });
    content.innerHTML += newdata.join("");
}

function remove(id) {
    let index = products.findIndex((x) => x.id == id);
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
}

function showDetails(id) {
    window.location = "details.html";
    localStorage.setItem("selectedId", id);
}