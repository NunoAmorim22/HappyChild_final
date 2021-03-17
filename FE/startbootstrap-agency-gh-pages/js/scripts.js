/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict


//-------------------------------------------NOVO----------------------------------------------------//

function chooseTypeChild(){
    localStorage.setItem("type", "child");
    window.location.href = "./MenuEscolherIdade.html";
}

function chooseTypeFamily(){
    localStorage.setItem("type", "family");
    window.location.href = "./Login.html";
}

function chooseTypeInstitution(){
    localStorage.setItem("type", "institution");
    window.location.href = "./Login.html";
}

function moveOn(){
    if(localStorage.getItem("idade")!== null && localStorage.getItem("gender") !== null){
        window.location.href = "./MenuPrincipal.html";
    }
}

function chooseGenderMale(){
    localStorage.setItem("gender", "male");
    document.getElementById("male-btn").style.backgroundColor = "rgba(249, 210, 77, 1)";
    document.getElementById("female-btn").style.backgroundColor = "rgba(255, 255, 255, 0)";
}
function chooseGenderFemale(){
    localStorage.setItem("gender", "female");
    document.getElementById("male-btn").style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.getElementById("female-btn").style.backgroundColor = "rgba(249, 210, 77, 1)";
}

function chooseAge(faixa){
    localStorage.setItem("age", faixa);
    for(i=1;i<5;i++){
        if(faixa == i){
            document.getElementById(i + "btn").style.backgroundColor = "rgba(249, 210, 77, 1)";
        }
        else{
            document.getElementById(i + "btn").style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
    }
}

function clearLocalStorage(){
    localStorage.clear();
}

function changeMainMenu(){
    if(localStorage.getItem("type") == "child"){
        document.getElementById("forumbtn").remove();
        document.getElementById("perfilbtn").remove();
    }
}