$(function(){
    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
            $(this).toggleClass('on');
            $("+.submenu",this).slideToggle()
            return false;
        });
    });

    var topBtn = $('.top');
        topBtn.hide();
        $(window).scroll(function () {
            
            if ($(this).scrollTop() > 200) {
                topBtn.fadeIn();
            } else {
                
                topBtn.fadeOut();
            }
        });

    $('.top').click(function() {
        
        $('body, html').animate({scrollTop: 0}, 600, 'linear');

    });

    $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    

});