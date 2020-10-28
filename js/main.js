var isMacLike = !!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)
    , platformClassName = isMacLike ? "platform-mac" : "";
function onReady() {
    var a = document.querySelector(".main-navigation");
    document.querySelector(".js-extend-main-navigation").addEventListener("click", function (e) {
        e.preventDefault(),
            a.classList.toggle("extended")
    }, !1);
    var e = document.querySelector && document.querySelector("html");
    e && (e.className += " " + platformClassName)

    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 800);
    });

    var $lis = $(".navigation-extendable ul li").click(function (e) {
        $lis.removeClass('current');
        $(this).addClass('current');
    })
}
document.addEventListener("DOMContentLoaded", onReady);
