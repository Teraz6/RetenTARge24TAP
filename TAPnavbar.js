fetch("Navbar/TAPnavbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("TAPnavbar").innerHTML = data;
});
