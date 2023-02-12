const NavBurger = document.querySelector(".burger");
const NavLista = document.querySelector(".nav--list--menu");

NavBurger.addEventListener("click", () => {
    NavLista.classList.toggle("navegar_lista_visible");

    if (NavLista.classList.contains("navegar_lista_visible")){
        NavBurger.setAttribute("arial-label", "cerrar menu");
    }else{
        NavBurger.setAttribute("arial-label", "abrir menu");
    }
const MenuLink = document.querySelectorAll(".nav--list--menu");
MenuLink.forEach(MenuLink =>{
    MenuLink.addEventListener("click", function(){
        NavLista.classList.remove("navegar_lista_visible");
    })
})
});