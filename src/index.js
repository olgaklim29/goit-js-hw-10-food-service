import "./sass/style.scss";

import menu from "./menu.json";
import cardsTpl from "./templates/cards.hbs";


const menuList = document.querySelector('.js-menu');

const menuMarkup = cardsTpl(menu);

menuList.insertAdjacentHTML('beforeend', menuMarkup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector("body");
const checkbox = document.querySelector('#theme-switch-toggle');

document.body.classList.add(Theme.LIGHT);

if(localStorage.getItem("theme_localStorage")) {
  document.body.classList.add(Theme.DARK)
   checkbox.checked = true;
 } 

checkbox.addEventListener('change', checkboxChange);

function checkboxChange(){
    if(checkbox.checked){
        addRemoveClass(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme_localStorage', JSON.stringify(Theme.DARK));
        return
    }
    addRemoveClass(Theme.LIGHT, Theme.DARK);
    localStorage.removeItem('theme_localStorage');
};

function addRemoveClass(add, remove) {
  document.body.classList.add(add)
  document.body.classList.remove(remove);
}