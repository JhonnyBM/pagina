document.querySelector("button.button-menu-toggle")
.addEventListener("click", function(event) {
       event.preventDefault();
       event.stopPropagation();
       document.querySelector(".nav-links").
                  classList.toggle("nav-links-responsive")})

document.addEventListener("click",function(event){
       const menu=document.querySelector(".nav-links");
       console.log(menu);
       if (!menu.contains(event.target)){
              menu.classList.remove("nav-links-responsive");
       }
})