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
    window.location.href = "./LoginFamilias.html";
}

function chooseTypeInstitution(){
    localStorage.setItem("type", "institution");
    window.location.href = "./LoginInstituicoes.html";
}

function moveOn(){
    if(localStorage.getItem("age")!== null && localStorage.getItem("gender") !== null){
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
        if(localStorage.getItem("age") === "1" || localStorage.getItem("age") === "2" || localStorage.getItem("age") === "3"){
            document.getElementById("forumbtn").remove();
            document.getElementById("direitosbtn").setAttribute("href", "MenuDireitosCriancas.html");
        }
        document.getElementById("perfilbtn").remove();
    }
    else if(localStorage.getItem("function") == "seguranca"){
        document.getElementById("apoiosplace").innerHTML = '<a class="nav-link js-scroll-trigger" href="MenuVerDenuncias.html"><i class="fas fa-shield-alt"></i> Denuncias</a>';
    }
    else {
        document.getElementById("apoiosplace").innerHTML = '<a class="nav-link js-scroll-trigger" href="MenuSelecaoTipoInformacao.html"><i class="far fa-question-circle"></i> Ajudas</a>';
    }
}

function changeProfileMenu(){
    if(localStorage.getItem("type") == "family"){
        document.getElementById("instituitiontype").remove();
    }
}

function changeLinhasApoio(){
    if(localStorage.getItem("type") !== "child"){
        document.getElementById("formComplaint").remove();
    }
}

/*-----------------------------------------------------------------------------------------------*/


function testeImagem(){
fetch("http://localhost:8080/prochild/livros")
.then(response =>{
    console.log('response', response);
    if(!response.ok){
        throw Error("Erro fetching")
    }
    return response.json();
});
}