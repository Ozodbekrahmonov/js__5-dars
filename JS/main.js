/*JSsa HTML teglari bilan ishladh*/

/*let headTag = document.head;
let bodytag = document.body;
let havola = document.documentURI;
let formalar = document.forms;
let ramlar = document.images;
let havolalar = document.links;

console.log(havolalar);*/
/*Events in JS: onclick*/

function meniBos(){
    alert("Siz tugmani bostingiz!");
}
function meniIkkiMartabos(){
    alert("Siz tugmani 2 marta bostingiz!");
}
function tanlash(event){
    alert( "Siz" + event.target.value + " mashinasini tanladingiz! ");
}
function inputgaBosish(){
    console.log("Inputga bosildi!");
}
function inputdanChiqish(){
    console.log("Inpudan chiqildi!")
}
function yozish(event){
    console.log(event.target.value);
}
document.querySelector('.text').addEventListener('paste',function (event){
    console.log( "Diqqat! Sizdan " + event.target.value + "nomli fayl qo'yilyapti!");
})

function harakatlanish(e){
    console.log(e.clientY,e.clientX);
}
function kirish(){
    alert("Hududga kiritildi!")
}
function chiqish(){
    alert("Hudud tark etildi!");
}

