var time = setInterval(Autoplay, 1000);
var index = 0;
var slides = document.getElementsByClassName("slides");
// var slides = document.querySelector(".slides");
var items = slides[0].getElementsByClassName("item");
var lis = document.getElementsByTagName("li");
// console.log(slides,items,lis);

function Autoplay() {
    items[index].className = "item";
    lis[index].className = "";
    index++;
    if (index === items.length) {
        index = 0;
    }
    items[index].className = "item active";
    lis[index].className = "active";
}
slides[0].onmouseover = function () {
    clearInterval(time);
}
slides[0].onmouseout = function () {
    time = setInterval(Autoplay, 1000);
}

for (var i = 0; i < items.length; i++) {
    lis[i].dataset.index = i;
    lis[i].onclick = function () {

        items[index].className = "item";
        lis[index].className = "";
        var j = +this.dataset.index;
        items[j].className = "item active";
        lis[j].className = "active";
        index = j;

    }

}
var right = document.getElementsByClassName("arrow right");
right[0].onclick = function () {
    Autoplay();
}
var left = document.getElementsByClassName("arrow left");
left[0].onclick = function () {
    items[index].className = "item";
    lis[index].className = "";
    index--;
    if (index === -1) {
        index = items.length - 1;
    }
    items[index].className = "item active";
    lis[index].className = "active";
}