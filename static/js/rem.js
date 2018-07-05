function rem() {
    var t = document.documentElement.clientWidth;
    if (t > 430) {
        // document.getElementsByTagName("html")[0]
        document.querySelector('html').style.fontSize = '430px';
    } else {
        document.querySelector('html').style.fontSize = t + 'px';
    }

}
rem();
window.addEventListener("resize",
    function () {
        rem();
    }, !1);