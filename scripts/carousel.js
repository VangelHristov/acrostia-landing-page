$(document).ready(function (){
    "use strict";

    $.fn.nextOrFirst = function(selector){
        const next = this.next(selector);
        return (next.length) ? next : this.prevAll(selector).last();
    };

    $.fn.prevOrLast = function(selector){
        const prev = this.prev(selector);
        return (prev.length) ? prev : this.nextAll(selector).last();
    };

    const change = function (ev, action){
        const $carousel = $(ev.target)
            .parent()
            .parent();

        const $imgActive = $carousel.find("img:visible");

        $imgActive.hide("slow", "swing");
        $imgActive
            [action]()
            .show("slow", "swing");

        const $caption = $carousel.find(".carousel-caption:visible");
        $caption.hide("slow", "swing");
        $caption
            [action]()
            .show("slow", "swing");

        const $indicatorActive = $carousel
            .find(".carousel-indicator.active");
        $indicatorActive.removeClass("active");

        $indicatorActive
            [action]()
            .addClass("active");
    };

    const getNext = (ev) => change(ev, "nextOrFirst");
    const getPrev = (ev) => change(ev, "prevOrLast");

    const $carousels = $(".carousel");

    $(".carousel-prev")
        .click(getPrev);

    $(".carousel-next")
        .click(getNext);

    $.each($carousels, function (i, carousel){
        $(carousel)
            .find(".carousel-images img")
            .first()
            .show();

        $(carousel)
            .find(".carousel-caption")
            .first()
            .show();

        $(carousel)
            .find(".carousel-indicator")
            .first()
            .addClass("active");
    });
});