let donateSum = 0;


function setMainMinHeight() {
    let logo = $('header a img').outerHeight(true);
    let nav = $('nav').outerHeight(true);
    let foot = $('footer').outerHeight(true);
    let $main = $('main').first();

    let newMinHeight =
        $(window).height()
        - logo
        - nav
        - foot
        + 'px';

    $($main).css('minHeight', newMinHeight);
}

function create_pic_caption_class() {
    console.log('create class pic caption');
    $('<style>')
        .prop("type", "text/css")
        .html("\
        .pic_caption{\
        \
        }").appendTo('head');

    $('<style>')
        .prop("type", "text/css")
        .html("\
        .pic_caption > img{\
        max-width: 100%;\
        max-height: 100%;\
        }").appendTo('head');

    $('<style>')
        .prop("type", "text/css")
        .html("\
        .par_caption{\
        text-align: center;\
        font-size: 2em;\
        background-color: gray;\
        }").appendTo('head');
}

function createPicWithCaption(city){
    return "<div class='pic_caption col-sm-4'>"
        + "<img src='images/" + city + ".jpg' alt='cityname' class='image-fluid'/>"
        + "<p class='par_caption'>" + city[0].toUpperCase() + city.substring(1,) + "</p>"
        + "</div>"
}

function insertPlaces(city1, city2, city3){
    let city_set = $('#city_set');

    create_pic_caption_class();
    city_set.append(createPicWithCaption(city1));
    city_set.append(createPicWithCaption(city2));
    city_set.append(createPicWithCaption(city3));
}

$(setMainMinHeight); //run when document loads
$(window).on('resize', setMainMinHeight);
insertPlaces('prague', 'valencia', 'athens');


