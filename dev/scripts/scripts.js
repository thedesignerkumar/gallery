/*global jQuery*/

jQuery(document).ready(function($) {
    
    var image_height = $('.gallery img').height();
    var background_para_height = $('.back').height();
    var background_padding = image_height - background_para_height;
    // console.log(background_padding);
    // console.log(background_para_height);

    $('.gallery-container').css('height', image_height);
    $('.gallery-container .back').css({
        'padding-top' : background_padding/2,
        'padding-bottom' : background_padding/2
    });


});
