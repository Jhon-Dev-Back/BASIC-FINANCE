const toggler = document.querySelector(".btn");
toggler.addEventListener("click", function() {
    const sidebar = document.querySelector("#sidebar");
    const mainContent = document.querySelector(".main");

    // Togglear la clase "collapsed" en el sidebar
    sidebar.classList.toggle("collapsed");

    // Ajustar el margen izquierdo del main según si el sidebar está colapsado o no
    if (sidebar.classList.contains("collapsed")) {
        mainContent.style.marginLeft = "0"; // Sin margen cuando el sidebar está cerrado
    } else {
        mainContent.style.marginLeft = "264px"; // Con margen cuando el sidebar está abierto
    }
});
