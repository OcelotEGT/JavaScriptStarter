var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaOk: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};


var cantidad = aleatorio(0, 50);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.imagensrc = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
    fondo.cargarOk = true
    dibujar()
}

function cargarVacas()
{
    vaca.cargarOk = true
    dibujar()
}

function cargarCerdos()
{
    cerdo.cargarOk = true
    dibujar()
}

function cargarPollos()
{
    pollo.cargarOk = true
    dibujar()
}


function dibujar()
{
    if(fondo.cargarOk)
    {
        papel.drawImage(fondo.imagen, 0, 0)
    }

    if(vaca.cargarOk)
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60
            var y = y * 60
            papel.drawImage(vaca.imagen, x, y)
    
        }
    }

    if(cerdo.cargarOk)
    {
        for(var c=0; c < cantidad; c++)
        {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60
            var y = y * 60
            papel.drawImage(cerdo.imagen, x, y)
    
        }
    }

    if(pollo.cargarOk)
    {
        for(var p=0; p < cantidad; p++)
        {
            var x = aleatorio(0, 7)
            var y = aleatorio(0, 7)
            var x = x * 60
            var y = y * 60
            papel.drawImage(pollo.imagen, x, y)
        }
    }  
}


function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado
}