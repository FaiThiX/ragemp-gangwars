let btn1 = $("#weaponCompact");
let btn2 = $("#weaponBullpup");
let btn3 = $("#weaponGusenberg");
let btn4 = $("#weaponAdvanced");
let btn5 = $("#weaponMarksman");
let btn6 = $("#closeBTN");
btn1.click(() => {
    mp.trigger("selectWeapons", 1)
});
btn2.click(() => {
    mp.trigger("selectWeapons", 2)
});
btn3.click(() => {
    mp.trigger("selectWeapons", 3)
});
btn4.click(() => {
    mp.trigger("selectWeapons", 4)
});
btn5.click(() => {
    mp.trigger("selectWeapons", 5)
});
btn6.click(() => {
    mp.trigger("closeWeapons");
});