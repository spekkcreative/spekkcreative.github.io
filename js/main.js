var velocity = 0.5;

function update(){
    var pos = $(window).scrollTop();
    $('.hero-bottom').each(function() {
        var $element = $(this);
        var height = $element.height()-100;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px');
    });
};

$(window).bind('scroll', update);
