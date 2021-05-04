
let menuButton = document.querySelector(".header__mobile-elements i");
let mobileNav = document.querySelector(".mobile-nav");
let mainBrand = document.querySelector(".main-header__brand");
let mainHeader = document.querySelector(".main-header");
let mobileShopcart = document.querySelector(".mobile-shopcart");
let open = false;



let hideMobileNav = (size) => {
    if (!size.matches) { // If media query matches
      mainHeader.style.height = "100px";
      mobileNav.style.visibility = "hidden";
      mainBrand.style.visibility = "visible";
      open = false;
    } 
  }
  
  let size = window.matchMedia("(max-width: 600px)")
  hideMobileNav(size) // Call listener function at run time
  size.addListener(hideMobileNav) // Attach listener function on state changes


  let toggleMenu = (open) => {
    if (open) {
      mobileNav.style.height = "100%";
    //   mobileNav.style.display = "block";
      mobileNav.style.visibility = "visible";
      mainBrand.style.visibility = "hidden";
      mobileShopcart.style.visibility = "hidden";
 
    } else {
      mobileNav.style.height = "83px";
    //   mobileNav.style.display = "none";
      mobileNav.style.visibility = "hidden";
      setTimeout(function(){
           mainBrand.style.visibility = "visible";
            mobileShopcart.style.visibility = "visible";
         }, 300);
    //   mainBrand.style.visibility = "visible";
    //   mobileShopcart.style.visibility = "visible";
    }
  }
  
  
  menuButton.addEventListener("click", () => {
    open = !open;
    toggleMenu(open);
  });



  $(".slider__services").slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrowControls: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]
  });


