function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed!";
}

var alternateCase = function (s) {
    var chars = s.toLowerCase().split("");
    for (var i = 0; i < chars.length; i ++) {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
};

var txt = "hello world";
console.log(alternateCase(txt));

function myFunction() {
    var x =
        document.getElementById("myText").value;
    var chars = x.toUpperCase();

    document.getElementById(
        "change_name").innerHTML = chars;

}