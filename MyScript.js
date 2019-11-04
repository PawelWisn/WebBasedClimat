function changeParagraph()
{
    document.getElementById("par_change").innerHTML = "Paragraph changed!";
}

var alternateCase = function (s)
{
    var chars = s.toLowerCase().split("");
    for (var i = 0; i < chars.length; i ++)
    {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
};

var txt = "hello world";
console.log(alternateCase(txt));

function myFunction()
{
    var x =
        document.getElementById("myText").value;
    var chars = x.toUpperCase();

    document.getElementById(
        "change_name").innerHTML = chars;

}

function iteratingCauses()
{
    var causes = ['Wasting water', 'Using coal', 'Driving cars'];
    var x;

    for (x of causes) {
        document.write(x + "<br >");
    }
}

function iter_whileCauses()
{
    var causess = ['Wasting water', 'Using coal', 'Driving cars'];
    var i = 0;
    var text = "";
    while (causess[i]) {
        text += causess[i] + "<br>";
        i++;
    }
    document.getElementById("iter_causes").innerHTML = text;
}