const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"]
//index             0     1     2    3     4      5     6

let dimension = document.getElementById("dimselect");
let opg = document.getElementById("opginput");
let opgeenh = document.getElementById("opgeenh");
let antw = document.getElementById("antwinput");
let antweenh = document.getElementById("antweenh");

function nieuw(){
    //de gekozen dimensie moet ik weten
    if(dimension.value == 0) {
        alert("Kies een dimensie a.u.b.!");
    } else {
        //hier moet nu geprogrammeerd worden
        //genereer een willekeurig getal tussen 0 en 6, en neem
        //die als index voor eenheden[]
        let randomnmbr = Math.floor(Math.random() * 7);
        //console.log(randomnmbr + " " + eenheden[randomnmbr]);
        if(dimension.value == 1)
            opgeenh.innerHTML = eenheden[randomnmbr];
        else
            opgeenh.innerHTML = eenheden[randomnmbr] + "<sup>" + dimension.value + "</sup>";
        //console.log("De gekozen dimensie = " + dimension.value);
        //console.log("het eerste element uit eenheden = " + eenheden[0]);
    }
}

function check(){
    alert("Check!!!")
}