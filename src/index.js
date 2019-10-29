'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import menuChoiceClub from './modules/menuChoiceClub';
import modal1 from './modules/modal1';
import modal2 from './modules/modal2';
import sendFormModals from './modules/sendFormModals';
import mainSlaider from './modules/mainSlaider';
import pageForm from './modules/pageForm';
import carousel from './modules/carousel';
import photo from './modules/photo';
import form3 from './modules/form3';
import form4 from './modules/form4';
import burgerMenu from './modules/burgerMenu';
import fixBurgerMenu from './modules/fixBurgerMenu';
import arrow from './modules/arrow';
import promo from './modules/promo';
import modalGift from './modules/modalGift';
import calc from './modules/calc';
//выпадающее меню 
menuChoiceClub();  
//модальное окно 1
modal1();
//модальное окно 2
modal2();
// Отправка форм в модальных окнах
sendFormModals();
//Форма на странице
pageForm();
//Слайдер-карусель
carousel();
//Фотогалерея
photo(); 
//Форма 3
form3();
//Форма4
form4();
//Меню
burgerMenu();
//Появление стрелки
arrow();
//Фиксация бургер-меню
fixBurgerMenu();

const mozaika = document.getElementById('mozaika'),
    schelkovo = document.getElementById('schelkovo');
    if (!mozaika && !schelkovo){
//Главный слайдер
mainSlaider();
//Калькулятор
calc();
//промокод
promo();
//Подарок
modalGift();

};