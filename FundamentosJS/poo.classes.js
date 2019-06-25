//Clases
class Persona
{
    constructor(nombre, apellidop, apellidom, edad, estatura){
    this.nombre = nombre;
    this.apellidop = apellidop;
    this.apellidom = apellidom;
    this.edad = edad;
    this.estatura = estatura
    }
    
    saludar(fn)
    {
        var {nombre, apellidop, apellidom} = this
        console.log(`Hola, me llamo ${nombre} ${apellidop} ${apellidom}`);
        if(fn)
        {
            fn(nombre, apellidop, apellidom, false)
        }
    }
    soyAlto()
    {
        this.estatura >= 1.8;
    }

}


class Desarrollador extends Persona 
{
    constructor (nombre, apellidop, apellidom, edad, estatura)
    {
        super(nombre, apellidop, apellidom, edad, estatura)
    }

    saludar(fn)
    {
        var {nombre, apellidop, apellidom} = this
        console.log(`Hola, me llamo ${nombre} ${apellidop} ${apellidom} y soy desarrollador`)
        if(fn)
        {
            fn(nombre, apellidop, apellidom, true)
        }
    }
}


function responderSaludo(nombre, apellidop, apellidom, esDev)
{
    console.log(`Buen día ${nombre} ${apellidop} ${apellidom}`)
    if (esDev)
    {
        console.log(`Ah, mira. No sabía que eras desarrollador/a`)
    }
}


var ismael = new Desarrollador('Ismael', 'Fajardo', 'Plaza', 30, 1.68);
var erika = new Persona('Erika', 'Luna', 'Trujillo', 25, 1.59);
var astrid = new Persona('Astrid', 'Rocha', 'Salazar', 20, 1.72);

ismael.saludar();
erika.saludar(responderSaludo);
astrid.saludar(responderSaludo);
