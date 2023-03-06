const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

$(document).on("click",".onglets-side a", function () {
    $(this).addClass("active").siblings().removeClass("active")
}) 

const menuHamburger = document.querySelector(".menu")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
