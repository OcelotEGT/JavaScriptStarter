var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0 ;
var yi, xf;

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("green", 0, yi, xf, 300);
  console.log("Linea " + l);
}

for(l = 0; l < lineas; l++)
{
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea("red", xi, 1, 299, yf);
  console.log("Linea " + l);
}

dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black", 1, 299, 299, 299);
dibujarLinea("black", 299, 299, 299, 1);
dibujarLinea("black", 299, 1, 1, 1);

function dibujarLinea(color, xi, yi , xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.background =
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
