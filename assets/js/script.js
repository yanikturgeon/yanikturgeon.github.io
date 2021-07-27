$(document).ready(function() {
    $('.owl-hero').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        nav: true,
        dotsEach: 4,
        center: true,
        stagePadding: 30,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
                margin: 10,
                stagePadding: 10
            },
            568: {
                items: 2,
                nav: true,
                dots: false,
                margin: 15,
                stagePadding: 20
            },
            768: {
                items: 2,
                nav: true,
                margin: 20,
                stagePadding: 20
            },
            992: {
                items: 3,
                nav: true,
            },
            1200: {
                items: 3,
                nav: true
            }
        }
    });
    $('.owl-coins').owlCarousel({
        items: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 100,
        nav: true,
        center: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true,
            },
            576: {
                items: 5,
                nav: true
            },
            768: {
                items: 7,
                nav: true,
            },
            992: {
                items: 7,
                nav: true,
            },
            1200: {
                items: 9,
                nav: true
            }
        }
    });
    size_li = $("#ourCollections div.col").length;
    // alert($("#ourCollections div.col").length);
    x = 0;
    // $('#ourCollections div.col:lt(4)').show();
    $('#loadMore').on("click", function() {
        x = (x + 4 !== size_li) ? x + 4 : size_li;
        $('#ourCollections div.col:lt(' + x + ')').show();
        $('#showLess').show();
        if (x == size_li) {
            $('#loadMore').hide();
        }
    });
    $('#showLess').on("click", function() {
        x = (x - 4 < 0) ? 4 : x - 4;
        $('#ourCollections div.col').not(':lt(' + x + ')').hide();
        $('#loadMore').show();
        $('#showLess').show();
        if (x == 8) {
            $('#showLess').hide();
        }
    });
    // Set the date we're counting down to
    var countDownDate = new Date("August 5, 2021 23:59:59").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = days + "<span>天</span>" + hours + "<span>小時</span>" +
            minutes + "<span>分鐘</span>" + seconds + "<span>秒</span>";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "<span>已到期</span>";
        }
    }, 1000);
});