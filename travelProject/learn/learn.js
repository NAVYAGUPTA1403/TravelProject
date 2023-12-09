'use strict';

//header
const header = document.querySelector('.header');
const navbar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#nav-close');


menuBtn.onclick = () =>{
    navbar.classList.add('active');  
}

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
}

//search form

const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const searchClose = document.querySelector('#close-search');

searchBtn.onclick = () =>{
    searchForm.classList.add('active');
}


searchClose.onclick = () =>{
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0)
        header.classList.add('active');
    else
        header.classList.remove('active');
}

window.onload = () =>{

    if(window.scrollY > 0)
        header.classList.add('active');
    else
        header.classList.remove('active');
}


var swiper = new Swiper(".home-slider ", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true, 
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1, 

        },
        640: {
        slidesPerView: 2,

        },
        768: {
        slidesPerView: 3,
        },
        
        1024: {
        slidesPerView: 3,
        },
    },
    });


var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true, 
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1, 

        },
        640: {
        slidesPerView: 2,

        },
        768: {
        slidesPerView: 3,
        },
    },
    });


var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true, 
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1, 

        },
        768: {
        slidesPerView: 2,

        },
        991: {
        slidesPerView: 3,
        },
    },
    });


var swiper = new Swiper(".clients-slider", {
    loop:true,
    grabCursor:true, 
    spaceBetween: 20,
    breakpoints: {
        0: {
        slidesPerView: 1, 

        },
        640: {
        slidesPerView: 2,

        },
        768: {
        slidesPerView: 3,
        },
        
        1024: {
        slidesPerView: 4,
        },
    },
});



//packages-pages

let loadmoreBtn = document.querySelectorAll('.packages-pages .load-more .btn');

let currentItem = 3;

loadmoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages-pages .box-container .box')];
    for(var i = currentItem; i < currentItem+3; i++)
    {
        boxes[i].style.display = 'inline-block';
    }

    currentItem += 3;
    if(currentItem >= boxes.length)
        loadmoreBtn.style.display = 'none';
}

// dark/light theme toggle

const icon = document.getElementById('#toggle-images');
const services = document.querySelector('.services img');
// console.log(icon);

icon.addEventListener("click" , function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme'))
    {
        icon.src = "https://cdn-icons-png.flaticon.com/256/1829/1829191.png";
        services.style.color = "white";
    }

    else 
        icon.src = "https://cdn-icons-png.flaticon.com/256/702/702471.png";
})

