'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import commandPhoto from './modules/commandPhoto';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//таймер
countTimer('10 october 2019');
//меню
toggleMenu();
//popup (модальное окно)
togglePopUp();
//Табы
tabs();
//слайдеры 
slider();
//наша команда 
commandPhoto();
//калькулятор
calc(100);
//send-ajax-form
sendForm();   