// index.js
import "./styles.css";

import img_restaurant_bg from "../assets/images/restaurant_background.png";

import { page_load_text_home, div_home } from "./home.js";
import { page_load_text_menu, div_menu} from "./menu.js";
import { page_load_text_about, div_aboutus } from "./about.js";
import { page_HTMLRenderer } from "./renderHTML.js";

console.log(page_load_text_about);
console.log(page_load_text_home);
console.log(page_load_text_menu);
console.log(page_HTMLRenderer);


const txt_logo = "Rudubear Ajisen Ramen Restaurant"
const txt_intro = "Welcome to Rudubear's Ajisen Ramen Restaurant. Proudly serving the Toronto region for 39 years!"
const txt_hours = "We are open Monday's to Friday 9am-5pm EST."

const txt_main_dishes_ramen = "Our world class pork ramen, loved by men and women of all ages, made with our unique blend of herbs and spices with a zesty taste that is sure to satisfy your palate";
const txt_main_dishes_miso_soup = "The best Miso Soup the working class man or woman would ask for. Warms your heart and soul";
const txt_main_dishes_sushi = "Try our gold dragon, green dragon and black dragon, all at once!"

const txt_drinks_coke = "Coca Cola";
const txt_drinks_green_tea = "Green Tea";
const txt_drinks_cappucino = "Cappucino";


function addCanvas(someElement) {
    const myCanvas = document.createElement('canvas');
    const myCtx = myCanvas.getContext("2d");
    myCanvas.width = 500;
    myCtx.fillStyle = "brown";
    myCtx.fillRect(15,15,100,100);

    if(someElement) {
        someElement.appendChild(myCanvas);
    }

}
let divContent = document.getElementById("content");
let divBody = document.querySelector('body');

console.log("testtt");

divContent.appendChild(div_menu);
divContent.appendChild(div_aboutus);
divContent.appendChild(div_home);

const image_restaurant_bg = document.createElement("img");
image_restaurant_bg.src = img_restaurant_bg;

//document.body.appendChild(image_restaurant_bg);


divBody.style.backgroundImage = `url(${img_restaurant_bg})`;


//divContent.style.backgroundImage = `url(${img_restaurant_bg})`;

//addCanvas(divContent);

console.log("huerr");
//console.log(img_restaurant_bg);
//console.log(image_restaurant_bg);
console.log("test");