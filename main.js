const MyFigure = {

    FigName : "Square",
    figSide : 5,
    FigArea : [ 9,16,25,30,36,45],
    FigColor : "RED",
    FigPosition : [0,0],
    FIgOwner : "Bryan",
    FigPlace : "Origin",

    Cubex3D(height) {

        Volume = height * this.figSide ; 
        return Volume;

    }

};

const sa = MyFigure->FigName ;

const scd =MyFigure["FigArea"];

const std = MyFigure[FIgOwner];

console.log(sa);
console.log(scd);
console.log(std);


MyFigure.FigArea.push(32);

console.log( MyFigure.FigArea);

MyFigure.Cubex3D(7);
myCube = MyFigure.Cubex3D(7);
console.log(myCube)


function crearUsuario(nombre, edad, esAdmin) {
    return {
      nombre: nombre,
      edad: edad,
      esAdmin: esAdmin
    };
  }
  
  const usuario = crearUsuario("Juan", 25, true);
  console.log(usuario); // { nombre: 'Juan', edad: 25, esAdmin: true }

  function crearUsuario2({ nombre, edad, esAdmin = false }) {
    return {
      nombre,
      edad,
      esAdmin
    };
  }
  
  const usuario2 = crearUsuario2({ nombre: "Juan", edad: 25 });
  console.log(usuario); // { nombre: 'Juan', edad: 25, esAdmin: false }

  
  function configurarServidor({ host = "localhost", port = 3000, protocolo = "http" }) {
    const url = `${protocolo}://${host}:${port}`;
    return {
      host,
      port,
      protocolo,
      url
    };
  }
  
  const configuracion = configurarServidor({ port: 8080, protocolo: "https" });
  console.log(configuracion);
  // {
  //   host: 'localhost',
  //   port: 8080,
  //   protocolo: 'https',
  //   url: 'https://localhost:8080'
  // }

  

nameOfDog("Elmo"); 
function nameOfDog(name) { console.log(name); }; 
