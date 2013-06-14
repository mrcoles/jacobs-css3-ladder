
(function() {

    $('.box').addClass('magictime');

    var delay = 700;
    var canAnimate = true;
    var flipped = false;

    $('.group.front .box').first().hover(function() {
        if (!canAnimate) return;
        canAnimate = false;
        var count = 0;
        var $parent = $(this).closest('.group');
        (function go() {
            var isFront = count % 2 == 0,
                $parent = $('.group' + (isFront ? '.front' : ':not(.front)')),
                index = parseInt(count / 2),
                $box = $parent.find('.box:eq('+index+')');

            if ($box.size()) {
                $box.addClass('perspectiveDown');
                count += 1;
                window.setTimeout(go, delay);
            } else {
                $('.box')[flipped?'removeClass':'addClass']('flipped');
                $('.box').removeClass('perspectiveDown');
                $('#boxes').addClass('pre-slide');
                canAnimate = true;
                window.setTimeout(function() {
                    $('#boxes').removeClass('pre-slide');
                }, 10);
            }
        })();
    });

})();
