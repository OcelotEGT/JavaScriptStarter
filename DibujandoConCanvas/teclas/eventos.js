var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xi, yi , xf, yf, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 3
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel)
      y = y - movimiento
      console.log("arriba");
    breack;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
      x = x - movimiento
      console.log("izquierda");
    breack;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
      y = y + movimiento
      console.log("abajo");
    breack;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
      x = x + movimiento
      console.log("derecha");
    breack;
 
    default:
      conk;sole.log("Otra tecla");
    breack;
  }
}
