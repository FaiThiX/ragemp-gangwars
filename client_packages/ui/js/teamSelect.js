let btn1 = $("#grove");
let btn2 = $("#ballas");
let btn3 = $("#lsv");
let btn4 = $("#rednecks");
let btn5 = $("#mg13");
let btn6 = $("#lcn");
let btn7 = $("#triaden");
let btn8 = $("#lost");
btn1.click(() => {
    mp.trigger("selectteam:client", "gf")
});
btn2.click(() => {
    mp.trigger("selectteam:client", "ballas")
});
btn3.click(() => {
    mp.trigger("selectteam:client", "lsv")
});
btn4.click(() => {
    mp.trigger("selectteam:client", "rednecks")
});
btn5.click(() => {
    mp.trigger("selectteam:client", "mg13")
});
btn6.click(() => {
    mp.trigger("selectteam:client", "lcn")
});
btn7.click(() => {
    mp.trigger("selectteam:client", "triaden")
});
btn8.click(() => {
    mp.trigger("selectteam:client", "lost")
});