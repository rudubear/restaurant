// home.js

const page_load_text_home = "loading home page!"

import { 
    createHTMLelement_DIV, 
    createHTMLelement_P,
    createHTMLelement_H,
    createHTMLelement_TABLE,
    createHTMLelement_TableCaption,
    createHTMLelement_TableHeaders,
    createHTMLelement_TableRow, 
    createHTMLelement_TableBody
} from "./renderHTML.js";

const home_p1 = "Welcome to Rudubear's Ajisen Ramen Restaurant. Proudly serving the Toronto region for 39 years!";
const home_p2 = "We are open Monday's to Friday 9am-5pm EST.";

const txt_tbl_caption = "Open Hours";
const txt_tbl_thead = [ "Day", "Hours"];
const txt_tbl_tb_mon = ["Monday", "9am-5pm"];
const txt_tbl_tb_tue = ["Tuesday", "9am-5pm"];
const txt_tbl_tb_wed = ["Wednesday", "9am-5pm"];
const txt_tbl_tb_thu = ["Thursday", "9am-5pm"];
const txt_tbl_tb_fri = ["Friday", "9am-5pm"];
const txt_tbl_tb_sat = ["Saturday", "12pm-5pm"];
const txt_tbl_tb_sun = ["Closed"];

let div_home = createHTMLelement_DIV("divsHome");
let my_tbl = createHTMLelement_TABLE("tabletext");
let my_tbl_caption = createHTMLelement_TableCaption(txt_tbl_caption);
let my_tbl_header_row = createHTMLelement_TableHeaders(txt_tbl_thead);
let my_tbl_body = createHTMLelement_TableBody();

let my_tbl_body_row1 = createHTMLelement_TableRow(txt_tbl_tb_mon);
let my_tbl_body_row2 = createHTMLelement_TableRow(txt_tbl_tb_tue);
let my_tbl_body_row3 = createHTMLelement_TableRow(txt_tbl_tb_wed);
let my_tbl_body_row4 = createHTMLelement_TableRow(txt_tbl_tb_thu);
let my_tbl_body_row5 = createHTMLelement_TableRow(txt_tbl_tb_fri);
let my_tbl_body_row6 = createHTMLelement_TableRow(txt_tbl_tb_sun);
let my_tbl_body_row7 = createHTMLelement_TableRow(txt_tbl_tb_sat);

my_tbl_body.appendChild(my_tbl_body_row1);
my_tbl_body.appendChild(my_tbl_body_row2);
my_tbl_body.appendChild(my_tbl_body_row3);
my_tbl_body.appendChild(my_tbl_body_row4);
my_tbl_body.appendChild(my_tbl_body_row5);
my_tbl_body.appendChild(my_tbl_body_row6);
my_tbl_body.appendChild(my_tbl_body_row7);

my_tbl.appendChild(my_tbl_caption);
my_tbl.appendChild(my_tbl_header_row);
my_tbl.appendChild(my_tbl_body);

div_home.appendChild(my_tbl);



export { page_load_text_home, div_home };