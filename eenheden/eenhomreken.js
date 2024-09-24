let dimension = document.getElementById("dimselect");
let opg = document.getElementById("opginput");
let opgeenh = document.getElementById("opgeenh");

let antw = document.getElementById("antwinput");
let antweenh = document.getElementById("antweenh");

function nieuw(){
    //de gekozen dimensie moet ik weten
    if(dimension.value == 0) {
        alert("Kies een dimensie stumper!");
    } else {
        //hier moet nu geprogrammeerd worden
        alert("De gekozen dimensie = " + dimension.value);
    }
}

function check(){
    alert("Check!!!")
}