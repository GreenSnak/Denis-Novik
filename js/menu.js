let burger = document.querySelector(".burger"),

    burgerActive = burger.classList.contains("burger--active"),

    header = document.querySelector(".header");

let mobileNavItem = document.querySelector(".mobile-nav__item")


burger.onclick = function eventHandler(event) {
   
   if (event !== burgerActive) {

      burger.classList.toggle("burger--active");

      header.classList.toggle("header--width");
   }
    else {
      alert("Не работает");
   }
};



var elements = document.querySelectorAll(".mobile-nav__item");
   
for (let i = 0; i < elements.length; i++) {
   elements[i].onclick = function(){
      header.classList.remove("header--width");
      burger.classList.remove("burger--active");
   };
}