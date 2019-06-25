//Prototipos y herencia
function heredaDe(protHijo, protPadre)
{
    var fn = function () {}
    fn.prototype = protPadre.prototype;
    protHijo.prototype = new fn;
    protHijo.prototype.constructor = protHijo
}



function Persona(nombre, apellidop, apellidom, edad, estatura)
{
    this.nombre = nombre;
    this.apellidop = apellidop;
    this.apellidom = apellidom;
    this.edad = edad;
    this.estatura = estatura;
}

Persona.prototype.saludar = function ()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellidop} ${this.apellidom}`);
}

Persona.prototype.soyAlto = function ()
{
    this.estatura >= 1.8;
}


function Desarrollador(nombre, apellidop, apellidom, edad, estatura)
{
    this.nombre = nombre;
    this.apellidop = apellidop;
    this.apellidom = apellidom;
    this.edad = edad;
    this.estatura = estatura;
}


heredaDe(Desarrollador, Persona);


Desarrollador.prototype.saludar = function () 
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellidop} ${this.apellidom} y soy desarrollador`)
}


var ismael = new Desarrollador('Ismael', 'Fajardo', 'Plaza', 30, 1.68);
var erika = new Persona('Erika', 'Luna', 'Trujillo', 25, 1.59);
var astrid = new Persona('Astrid', 'Rocha', 'Salazar', 20, 1.72);

