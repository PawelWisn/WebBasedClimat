function changeParagraph()
{
    document.getElementById("par_change").innerHTML = "Paragraph changed!";
}

let alternateCase = function (s)
{
    let chars = s.toLowerCase().split("");
    for (let i = 0; i < chars.length; i ++)
    {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
};

let txt = "hello world";
console.log(alternateCase(txt));

function myFunction()
{
    let x =
        document.getElementById("myText").value;
    let chars = x.toUpperCase();

    document.getElementById(
        "change_name").innerHTML = chars;

}

function iteratingCauses()
{
    let causes = ['Wasting water', 'Using coal', 'Driving cars'];
    let x;

    for (x of causes) {
        document.write(x + "<br >");
    }
}

function iter_whileCauses()
{
    let causes = ['Wasting water', 'Using coal', 'Driving cars'];
    let i = 0;
    let text = "";
    while (causess[i]) {
        text += causess[i] + "<br>";
        i++;
    }
    document.getElementById("iter_causes").innerHTML = text;
}