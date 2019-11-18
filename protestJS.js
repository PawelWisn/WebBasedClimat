// $('main').append($('<p>hi there</p>'));

//+ parseInt($nav.css('marginTop')) + parseInt($nav.css('marginBottom'));
function setMainMinHeight() {
    let $logo = $('header a img').outerHeight(true);
    let $nav = $('nav').outerHeight(true);
    let $foot = $('footer').outerHeight(true);
    let $main = $('main').first();

    let newMinHeight = $(window).height()
        - $logo
        - $nav
        - $foot
        + 'px';

    $($main).css('minHeight', newMinHeight);
}
$(setMainMinHeight); //run when document loaded
$(window).on('resize', setMainMinHeight);
