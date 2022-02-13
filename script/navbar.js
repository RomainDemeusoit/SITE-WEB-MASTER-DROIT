var nav = document.getElementById("ul_navbar");
var header = document.getElementById("header");
var dots = document.getElementById("dots");
function clicknavbar() {
    nav.style["display"] = "block";
    header.style["flex-direction"] = "inherit";
    dots.style["content-visibility"] = "hidden";
    isExpended = true;
}

function clicknavbardown() {
    nav.style["display"] = "none";
    header.style["flex-direction"] = "";
    dots.style["content-visibility"] = "";
}