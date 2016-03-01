$(document).ready(function () {

    $('.readmore').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideDown("slow");
        jQuery('.readmore').hide("slow");
        jQuery('.readless').show("slow");
    });

    jQuery('.readless').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideUp();
        jQuery('.readless').hide();
        jQuery('.readmore').show();
    });

    jQuery('.learnmore').click(function (e) {
        e.preventDefault();
        jQuery('#learnmoretext').slideDown();
        jQuery('.learnmore').hide();
    });

});