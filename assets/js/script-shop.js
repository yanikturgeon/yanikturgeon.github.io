$(document).ready(function() {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            responsiveRefreshRate: 200,
            navText: [
                '<span>‹</span>',
                '<span>›</span>'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: true,
            nav: true,
            slideBy: 4,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        var current = el.item.index;

        //to disable loop, comment this block
        // var count = el.item.count - 1;
        // var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        // if (current < 0) {
        //     current = count;
        // }
        // if (current > count) {
        //     current = 0;
        // }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
    $('.owl-related').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 10,
        nav: true,
        // dotsEach: 1,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            576: {
                items: 3,
                nav: true,
                dots: false
            },
            768: {
                items: 3,
                nav: true,
            },
            992: {
                items: 5,
                nav: true,
            },
            1200: {
                items: 5,
                nav: true
            }
        }
    });
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})