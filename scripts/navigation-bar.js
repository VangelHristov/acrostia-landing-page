$(document).ready(function (){
    //window.addEventListener('scroll', function (){
    //    let navbar         = document.getElementsByTagName("nav")[0];
    //    let hasTranslucent = navbar.className.indexOf("translucent") > -1;
    //
    //    let scrollPosition       = window.scrollY;
    //    let shouldAddTranslucent = scrollPosition > navbar.offsetHeight;
    //
    //    if (shouldAddTranslucent) {
    //        if (!hasTranslucent) {
    //            navbar.className += " translucent";
    //        }
    //    } else {
    //        navbar.className = navbar.className.replace(" translucent", " ");
    //    }
    //});

    $('section')
        .each(function (){
            let position = $(this).position();

            $(this).scrollspy({
                min    : position.top - 1,
                max    : position.top + $(this).height(),
                onEnter: function (element){
                    let selector = "#" + element.id + "-link";
                    $("nav li.active").removeClass("active");
                    $(selector).addClass("active");
                }
            });
        });

    const $navbar      = $('.navbar');
    const toggleNavbar = function (){
        $navbar.toggleClass('sm-block');
        $navbar.toggleClass('sm-none');
    };

    $navbar.click(toggleNavbar);
    $('.menu').click(toggleNavbar);

});