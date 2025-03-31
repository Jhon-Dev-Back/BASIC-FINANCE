const toggler = document.querySelector(".btn");
toggler.addEventListener("click", function() {
    const sidebar = document.querySelector("#sidebar");
    const mainContent = document.querySelector(".main");

  
    sidebar.classList.toggle("collapsed");

    
    if (sidebar.classList.contains("collapsed")) {
        mainContent.style.marginLeft = "0"; 
    } else {
        mainContent.style.marginLeft = "264px"; 
    }
});
