let donateSum = 0;
const $main = $('main').first();
const $atList = $("#attendance_list").first();
const signed_people = {};
let currentCity;
const inputHTML = "<form class='par_caption' style='background-color: inherit'>\
    <input type='text' name='newGuyName' id='nameInput' placeholder='Your name'>\
    <input type='button' value='Enroll' onclick='signToTheList()'>\
   </form> ";

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
    //TODO hover cursor

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

    $('<style>')
        .prop("type", "text/css")
        .html("\
        .pic_caption > img{\
        max-width: 100%;\
        max-height: 100%;\
        \
        }").appendTo('head');
}

function createPicWithCaptionHTML(city) {
    return "<div class='pic_caption col-sm-4' id='" + city + "'>"
        + "<img src='images/" + city + ".jpg' alt='cityname' class='image-fluid'/>"
        + "<p class='par_caption'>" + city[0].toUpperCase() + city.substring(1,) + "</p>"
        + "</div>";
}

function insertProtestPlaces(arrayOfCities) {
    if (jQuery.isEmptyObject(signed_people)) {
        for (let cityName of arrayOfCities) {
            signed_people[cityName] = ["<h1 style=\"font-family: 'Calistoga', cursive; text-align: center;text-decoration: underline;font-size: 3.3em;\">People Signed Up:</h1>"];
        }
    }

    let city_set_div = $('#city_set');

    create_pic_caption_class();

    for (let cityName of arrayOfCities) {
        city_set_div.append(createPicWithCaptionHTML(cityName));
        $('#' + cityName).on('click', () => {
            displaySignedList(cityName);
            currentCity = cityName;
            //TODO highlight city img
        });
    }

}

function signToTheList() {
    let name = $('#nameInput').val();
    signed_people[currentCity].push("<h1 style=\"font-family: 'Calistoga', cursive; text-align: center\">" + name + "</h1>");
    displaySignedList(currentCity)
}


function displaySignedList(city) {
    $atList.empty();
    for (let element of signed_people[city]) {
        $atList.append(element);
    }
    $atList.append(inputHTML);
}


$(setMainMinHeight); //run when document loads
$(window).on('resize', setMainMinHeight);

insertProtestPlaces(['prague', 'valencia', 'athens']);



