$(document).ready(function()
{
    var main_navigation = $("#main-navigation");
    var main_nav = main_navigation.find("#main-nav");

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