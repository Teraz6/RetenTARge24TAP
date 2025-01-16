function ProgramAlused(){
    fetch("../ProgNavbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("ProgNavbar").innerHTML = data;
        });
        // Content that is being replaced
            document.getElementById("navbar").innerHTML = "";
}

function TAP(){
    fetch("../navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });
        document.getElementById("ProgNavbar").innerHTML = "";
}