fetch("../Navbar/indexPrognavbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("Prognavbar").innerHTML = data;
});