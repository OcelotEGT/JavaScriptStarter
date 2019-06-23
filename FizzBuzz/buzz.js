var texto = document.getElementById("seriecita");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",fizzBuzz);


function fizzBuzz()
{
    var serie = parseInt(texto.value)
    document.write()
    document.write("<h1>Tu serie de " + serie + " números es:</h1>")
    for (var i = 1; i <= serie; i++)
    {
        if (esDivisible(i, 3) && esDivisible(i, 5))
        {
            console.log("Fizz-Buzz");
            document.write("<strong style= 'color: green'>Fizz-Buzz</strong>");
        }
        else if (esDivisible(i, 3))
        {
            console.log("Fizz");
            document.write("<strong style= 'color: yellow'>Fizz</strong>");
        }
        else if (esDivisible(i, 5))
        {
            console.log("Buzz");
            document.write("<strong style= 'color: blue'>Buzz</strong>");
        }
        else
        {
            console.log(i);
            document.write("<p style= 'color: red'>" + i + "</p>");
        }
        document.write("<br />")
    }
}


function esDivisible(num, divisor)
{
    if (num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}