var imagenes = [];
imagenes["Varmancher"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Cochipluff"] = "cerdo.png";


var coleccion = [];
coleccion.push(new Pakiman("Varmancher", 80, 30, "Fuego", ["Var", "man", "cher"]));
coleccion.push(new Pakiman("Pokacho", 80, 50, "Eléctrico", ["Po", "ka", "cho"]));
coleccion.push(new Pakiman("Cochipluff", 120, 40, "Normal", ["Co", "chi", "pluff"]));


for(var c of coleccion)
{
    c.mostrar();
}

for(var x in coleccion[0])
{
    console.log(x)
}