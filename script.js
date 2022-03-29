window.addEventListener("load", init);

function init(){
    kirajzol();
    kiszinez();
}

function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}


function kirajzol(){

    for (let i = 0; i< 8; i++) {
        for (let n = 0; n < 8; n++) {
            ID("tabla").innerHTML+= "<div> a </div>"
        }
    }
}


function kiszinez(){
    var divek = $("#tabla div");
    for (let sor = 1; sor < divek.length; index+=16) {
            var db = 0;
        for (let index = sor; db < 4; index+=2) {
            db++;
            divek[index].style.backgroundColor = "black";
            //divek[index].addEventListener("click", beFigura);
        }
    }
    
}

//function beFigura(){}
/*
wbwbwbwb
bwbwbwbw
wbwbwbwb
bwbwbwbw
wbwbwbwb
bwbwbwbw
*/