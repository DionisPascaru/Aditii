$(document).ready(function () {
    // collapsible button
    $(".collapse-btn").click(function(){
        $(".navbar").toggle();
        $(".navbar ul").toggleClass("collapse-menu");
    })

    // banner slider 
    $('.slick-carousel').slick({
        dots: true,
        arrows: false,
        draggable: true,
        autoplay: true
    });

    // multiple slide
    $('.multiple-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<div class='prev'><img src='./img/prev.png'></div>",
        nextArrow: "<div class='next'><img src='./img/next.png'></div>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false
                }
            },
            {
                breakpoint: 448,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false
                }
            }
        ]
    });
})