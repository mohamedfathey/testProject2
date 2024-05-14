let user = document.getElementById("user");
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let data = localStorage.getItem("username");

if(data) {
    user.innerHTML = data;
    user.style.display="inline-block";
    login.style.display="none";
    logout.style.display="inline-block";
} else {
    login.style.display="inline-block";
    logout.style.display="none";
}

logout.addEventListener('click', function() {
    localStorage.clear();
    setTimeout( () => window.location = "login.html", 500);
});