fetch("../Navbar/Prognavbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("Prognavbar").innerHTML = data;
});
