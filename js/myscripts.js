$(document).ready(function()
{
    var main_navigation = $("#main-navigation");
    var main_nav = main_navigation.find("#main-nav");

    var didScroll;
    var resetTransition;
    var lastScrollTop = 0;
    var delta = 50;
    var navbarHeight = main_navigation.outerHeight();

    $(window).scroll(function(event)
    {
        didScroll = true;
    });

    setInterval(function()
    {
        if (didScroll)
        {
            if($(window).width() > 992)
            {
                hasScrolledDesktop();
            }
            else
            {
                hasScrolled();
                didScroll = false;
            }
        }

        if(resetTransition)
        {
            main_navigation.css('transition','height 0.5s ease, background 0.5s ease');
            main_navigation.find("#logo-text").css('transition','line-height 0.5s ease');
            resetTransition = false;
        }
    }, 100);

    function hasScrolled()
    {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight)
        {
            main_navigation.addClass('nav-up');
        }
        else if(st + $(window).height() < $(document).height())
        {
            main_navigation.removeClass('nav-up');
        }
        
        lastScrollTop = st;
    }

    if($(this).scrollTop() > 2)
    {
        main_navigation.css('transition','none');
        main_navigation.find("#logo-text").css('transition','none');
        main_navigation.addClass("white");
        resetTransition = true;
    }

    function hasScrolledDesktop()
    {
        var st = $(this).scrollTop();
        
        if(st < 2)
        {
            main_navigation.removeClass("white");
        }
        else
        {
            main_navigation.addClass("white");
        }
    }

    $("#navbar-toggler").click(function()
    {
        if (main_nav.hasClass("hide"))
        {
            main_nav.removeClass("hide");
        }
        else
        {
            main_nav.addClass("hide");
        }

        return false;
    });
});