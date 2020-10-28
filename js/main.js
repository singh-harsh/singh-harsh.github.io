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

    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a")
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("current")
                .end().filter("[href='#" + id + "']").parent().addClass("current");
        }
    });
}
document.addEventListener("DOMContentLoaded", onReady);
