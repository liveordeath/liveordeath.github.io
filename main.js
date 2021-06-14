$(function(){
    if(screen.width < 767){
        $('.slick-product').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }
    else if (screen.width > 767){
        $('.slick-product').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    $('.menu-content5 ul li').click(function(event) {
        event.preventDefault();
        $('.menu-content5 ul li').removeClass('active');
        $('.list-product').removeClass('show');
        $(this).addClass('active');
        var id = $(this).attr('data-option');
        $('.tab-content').hide();
        $('#'+id).show();
        $('#'+id).addClass('show');

    });
});
