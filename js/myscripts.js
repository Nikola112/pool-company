$(document).ready(function()
{
    var main_navigation = $("#main-navigation");
    var main_nav = main_navigation.find("#main-nav");

    var didScroll;
    var lastScrollTop = 0;
    var delta = 50;
    var navbarHeight = main_navigation.outerHeight();

    $(window).scroll(function(event)
    {
        didScroll = true;
    });

    setInterval(function()
    {
        if (didScroll && $(window).width() < 991.98)
        {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

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