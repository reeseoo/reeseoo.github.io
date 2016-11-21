$(document).ready(function() {
    $('h2').hide();

    $('.myButton').click(function() {
        $('body').animate({left: '200px'}, {duration: 1500});

    });
});