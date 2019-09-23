    var time = setInterval(Autoplay, 1000);
    var index = 0;
    var slides = document.getElementsByClassName("slides");
    // var slides = document.querySelector(".slides");
    var items = slides[0].getElementsByClassName("item");
    var itemwidth = parseInt(window.getComputedStyle(items[0]).width);
    // console.log(window.getComputedStyle(items[0]).width);
    var pics = document.getElementsByClassName("pics");
    // var pics = document.querySelector(".pics");
    pics[0].style.width = itemwidth * items.length + "px";
    var lis = document.getElementsByTagName("li");
    // console.log(pics);
    function Autoplay() {
        // items[index].className = "item";
        lis[index].className = "";
        index++;
        if (index === items.length) {
            index = 0;
        }
        pics[0].style.left = -itemwidth * index + "px";
        lis[index].className = "active";
        // items[index].className = "item active";
        // lis[index].className = "active";
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

            // items[index].className = "item";

            lis[index].className = "";


            var j = +this.dataset.index;
            lis[j].className = "active";
            // console.log(j);
            // items[j].className = "item active";
            // lis[j].className = "active";
            index = j;
            pics[0].style.left = -itemwidth * index + "px";

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