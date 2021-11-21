
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let scrollAnimations = sal({
        once: true,
    });
    
    if (screen.width < 1024) {
        scrollAnimations.disable();
    }
});

document.addEventListener('sal:in', ({ detail }) => {
    setTimeout(() => {
        detail.target.removeAttribute('data-sal-delay');
        detail.target.removeAttribute('data-sal-duration');
    }, 2000);
});

//burger-menu
const burgerMenu = document.querySelector(".burger-menu");
const burgerLine = document.querySelector(".burger-line");
const menuMobile = document.querySelector(".nav");

burgerMenu.addEventListener("click", () => {

    if (!burgerMenu.classList.contains("burger-menu_active")) {
        document.body.overflow = "hidden";
    } else {
        document.body.overflow = "";
    }

    burgerLine.classList.toggle("burger-line_active");
    burgerMenu.classList.toggle("burger-menu_active");
    menuMobile.classList.toggle("nav_active");
});

//spoiler sponsors
const spoilerTitle = document.querySelector(".spoiler-sponsors__title");
const listSponsors = document.querySelector(".sponsors");
const listSponsorsItems = document.querySelectorAll(".sponsors__item ");

let spoilerIsOpen = false;

spoilerTitle.addEventListener("click", spoiler);

function spoiler() {

    if (!spoilerIsOpen) {
        spoilerTitle.classList.add("spoiler-sponsors__title_active");
        listSponsors.style.minHeight = `${listSponsors.scrollHeight}px`;

        for (let elem of listSponsorsItems) {
            elem.classList.add("sponsors__item_active");
        }

        spoilerIsOpen = true;
    } else {
        spoilerTitle.classList.remove("spoiler-sponsors__title_active");
        listSponsors.style.minHeight = "";

        for (let elem of listSponsorsItems) {
            elem.classList.remove("sponsors__item_active");
        }

        spoilerIsOpen = false;
    }

}

const spoilerContacts = document.querySelector(".contacts-wrapper");
const spoilerContactsTitle = document.querySelector(".contacts-title");
const spoilerContactsBlock = document.querySelector(".contacts-block");

spoilerContacts.addEventListener("click", contactsSpoiler);

function contactsSpoiler(event) {
    let target = event.target;
    let targetTitle = target.closest(".contacts-title");

    if (targetTitle) {
        targetTitle.classList.toggle("contacts-title_active");
        let block = targetTitle.nextElementSibling;

        if (block.classList.contains("open-spoiler-block")) {
            block.classList.remove("open-spoiler-block");
            block.classList.remove("contacts-block_active");
            block.style.maxHeight = "";
        } else {
            block.classList.add("open-spoiler-block");
            block.classList.add("contacts-block_active");
            block.style.maxHeight = `${block.scrollHeight}px`;
        }

    }

}

//upper
const btnUpper = document.querySelector(".btn-upper");

document.addEventListener("scroll", upper);
btnUpper.addEventListener("click", toUpper);

function upper() {

    let offsetY = window.pageYOffset;

    if (offsetY > window.innerHeight * 3) {
        btnUpper.classList.add("btn-upper_active");
    } else {
        btnUpper.classList.remove("btn-upper_active");
    }

}

function toUpper() {
    window.scrollTo(0, 0);
    btnUpper.classList.remove("btn-upper_active");
}















