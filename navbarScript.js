function ProgramAlused(){
    fetch("../Navbar/Prognavbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("Prognavbar").innerHTML = data;
        });
        // Content that is being replaced
            document.getElementById("TAPnavbar").innerHTML = "";
}

function TAP(){
    fetch("../Navbar/TAPnavbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("TAPnavbar").innerHTML = data;
        });
        document.getElementById("Prognavbar").innerHTML = "";
}