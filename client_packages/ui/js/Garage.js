let btn1 = $("#carRevolter");
let btn2 = $("#carDrafter");
let btn3 = $("#carJugular");
let btn4 = $("#carSchafter");
let btn5 = $("#carKuruma");
let btn6 = $("#carbf400");
let btn7 = $("#carbati");
let btn8 = $("#carSupervolito");

let closeBtn = $("#closeBTN");

btn1.click(() => {
    mp.trigger("selectCar", 1)
});
btn2.click(() => {
    mp.trigger("selectCar", 2)
});
btn3.click(() => {
    mp.trigger("selectCar", 3)
});
btn4.click(() => {
    mp.trigger("selectCar", 4)
});
btn5.click(() => {
    mp.trigger("selectCar", 5)
});
btn6.click(() => {
    mp.trigger("selectCar", 6)
});
btn7.click(() => {
    mp.trigger("selectCar", 7)
});
btn8.click(() => {
    mp.trigger("selectCar", 8)
});

closeBtn.click(() => {
    mp.trigger("closeGarage")
});

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}