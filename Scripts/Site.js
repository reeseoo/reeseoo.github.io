$(document).ready(function() {
    var clicked = false;
    $('.myButton').click(function() {
        if (clicked == true) {
            $('body').animate({left: "-25%"}, {duration: 1000}, queue = false);
            $('ul').animate({left: "75%"}, 1000);
            clicked = false;
        } else {
            $('body').animate({left: "0"}, {duration: 1000}, queue = false);
            $('ul').animate({left: "100%"}, 1000);
            clicked = true;
        }
    });
});