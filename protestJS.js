let donateSum = 0;
const $main = $('#protestMain').first();
const $atList = $("#attendance_list").first();
const signed_people = {};
let currentCity;
const defaultColor = '#EDEAE0';
const activeColor = '#ffcc00';
const inputHTML = "<form class='par_caption' style='background-color: inherit'>\
    <input type='text' name='newGuyName' id='nameInput' placeholder='Your name'>\
    <input type='button' value='Enroll' id='enrollBut' onclick='signToTheList()'>\
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

function insertProtestHeader() {
    $main.prepend('<h1 id="joinHeader" style="font-family: \'Calistoga\', cursive; text-align: center">Join out protests!</h1>');
}

function create_pic_caption_class() {
    $('<style>')
        .prop("type", "text/css")
        .html("\
        .pic_caption{\
        border-radius: 10px;\
        }").appendTo('head');

    $('<style>')
        .prop("type", "text/css")
        .html("\
        .pic_caption:hover{\
        cursor:pointer;\
        }").appendTo('head');

    $('<style>')
        .prop("type", "text/css")
        .html("\
        .par_caption{\
        text-align: center;\
        font-size: 2em;\
        background-color: " + defaultColor + ";\
        font-family: 'Indie Flower', cursive;\
        letter-spacing: 5px;\
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
            recolor(currentCity, defaultColor);
            currentCity = cityName;
            recolor(currentCity, activeColor);
        });
    }

}

function recolor(cityName, color) {
    let $p = $('#' + cityName + " > p").first();
    if ($p) {
        $($p).css('background-color', color);
    }
}

function signToTheList() {
    let name = $('#nameInput').val();
    signed_people[currentCity].push("<h1 style=\"font-family: 'Calistoga', cursive; text-align: center\">" + name + "</h1>");
    displaySignedList(currentCity);
    window.scrollTo(0, $(window).height());
}


function displaySignedList(city) {
    $atList.empty();
    for (let element of signed_people[city]) {
        $atList.append(element);
    }
    $atList.append(inputHTML);
}

function donate() {
    let newDonation = prompt("How much money would you like to donate?", "5");
    newDonation = parseFloat(newDonation);
    if (!isNaN(newDonation)) {
        donateSum += newDonation;
        $('#donateLabel').text('Total Donations: ' + donateSum);
    } else {
        alert('Invalid input! Number required');
    }
}

function buildDonationHTML() {
    console.log('buildDonationHTML');
    let buttonHTML = "<div><button id='donateBtn' onclick='donate()' class='btn btn-warning' style='margin-bottom: 5px'>Donate</button></div>";
    let labelHTML = "<label style='padding-top: 7px; margin-left: 15px;' id='donateLabel'>Total Donations: 0</label>";
    let total = "<div class='row'>" + buttonHTML + labelHTML + "</div>";
    $('#joinHeader').after(total);
}

//run when document loads
$(setMainMinHeight);
$(insertProtestHeader);
$(buildDonationHTML);
$(() => {
    insertProtestPlaces(['prague', 'valencia', 'athens'])
});

$(window).on('resize', setMainMinHeight);





