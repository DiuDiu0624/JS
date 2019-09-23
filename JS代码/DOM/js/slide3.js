    function myslide(slides, objs) {
        var myobjs = {
            speed: 3000,
            dots: false,
            arrow: false
        };
        for (var s in objs) {
            myobjs[s] = objs[s];
        }
        var t = setInterval(Autoplay, myobjs.speed);
        // var time = setInterval(Autoplay, 1000);
        var index = 0;
        // var slides = document.getElementsByClassName("slides");
        // var slides = document.querySelector(".slides");
        var items = slides.getElementsByClassName("item");
        var itemwidth = parseInt(window.getComputedStyle(items[0]).width);
        // console.log(window.getComputedStyle(items[0]).width);
        var pics = slides.getElementsByClassName("pics");
        // var pics = document.querySelector(".pics");
        pics[0].style.width = itemwidth * items.length + "px";
        var lis = slides.getElementsByTagName("li");
        // console.log(pics);
        function Autoplay() {
            if (myobjs.dots) {
                // items[index].className = "item";
                lis[index].className = "";
            }
            index++;
            if (index === items.length) {
                index = 0;
            }
            pics[0].style.left = -itemwidth * index + "px";
            if (myobjs.dots) {
                lis[index].className = "active";
            }
            // items[index].className = "item active";
            // lis[index].className = "active";
        }
        slides.onmouseover = function () {
            clearInterval(t);
        }
        slides.onmouseout = function () {
            t = setInterval(Autoplay, myobjs.speed);
        }
        if (myobjs.dots) {
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
        }
        if (myobjs.arrow) {
            var right = slides.getElementsByClassName("arrow right");
            right[0].onclick = function () {
                Autoplay();
            }
            var left = slides.getElementsByClassName("arrow left");
            left[0].onclick = function () {
                // items[index].className = "item";
                if (myobjs.dots) {
                    lis[index].className = "";
                }
                index--;
                if (index === -1) {
                    index = items.length - 1;
                }
                // items[index].className = "item active";
                pics.style.left = -itemWidth * index + "px";
                if (myobjs.dots) {
                    lis[index].className = "active";
                }
            }
        }
    }