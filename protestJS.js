let donateSum = 0;
const $main = $('main').first();
const $atList = $("#attendance_list").first();
const signed_people = {};

function setMainMinHeight() {
    let logo = $('header a img').outerHeight(true);
    let nav = $('nav').outerHeight(true);
    let foot = $('footer').outerHeight(true);


    let newMinHeight =
        $(window).height()
        - logo
        - nav
        - foot
        + 'px';

    $($main).css('minHeight', newMinHeight);
}

function create_pic_caption_class() {
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
        \
        }").appendTo('head');

    $('<style>')
        .prop("type", "text/css")
        .html("\
        .par_caption{\
        text-align: center;\
        font-size: 2em;\
        background-color: #EDEAE0;\
        font-family: 'Indie Flower', cursive;\
        letter-spacing: 10px;\
        }").appendTo('head');
}

function createPicWithCaptionHTML(city) {
    return "<div class='pic_caption col-sm-4' id='" + city + "'>"
        + "<img src='images/" + city + ".jpg' alt='cityname' class='image-fluid'/>"
        + "<p class='par_caption'>" + city[0].toUpperCase() + city.substring(1,) + "</p>"
        + "</div>";
}

function insertProtestPlaces(arrayOfCities) {
    console.log('insertProtestPlaces');
    if (jQuery.isEmptyObject(signed_people)) {
        for(let cityName of arrayOfCities){
            signed_people[cityName] = [];
        }
    }

    let city_set_div = $('#city_set');

    create_pic_caption_class();

    for(let cityName of arrayOfCities){
        console.log(cityName);
        city_set_div.append(createPicWithCaptionHTML(cityName));
        $('#' + cityName).on('click', ()=>{
            buildListToDisplay(cityName);
        });
    }

}

function signToTheList(city) {
    signed_people[city].push("<h1 style=\"font-family: 'Calistoga', cursive; text-align: center\">name surname</h1>");
}

function buildListToDisplay() {
    console.log('buildListToDisplay');
    $atList.empty();
    for (let element in signed_people[this.id]) {
        //$atList.append(element);
        console.log(signed_people[this.id]);
    }
}


$(setMainMinHeight); //run when document loads
$(window).on('resize', setMainMinHeight);

insertProtestPlaces(['prague', 'valencia', 'athens']);

signToTheList('prague');


