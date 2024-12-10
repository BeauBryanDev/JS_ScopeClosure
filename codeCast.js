/*Array Edition in JS */ 

const AirPorts = [ "AUS","RSW", "MIA","MCO","JFK","EWR","LAX","SFO","PHX","DEN","MSA","ORD","IAD","DFW","IAH","LAS"];

// for ( let i = 0;  i < AirPorts.length ; i ++ ) { 

//     const airFiled = AirPorts[ i ];
//     console.log( airFiled ) ; 

// }

console.log( AirPorts ) ; 

AirPorts.forEach( IATA => console.log( IATA ) ) ;

const CityCodes = AirPorts.map( city => "USA_"+city);

console.log( "American Cities: ", CityCodes ) ; 

array3 = [0, 1,2,3,4,5,6,7,8,9]

function multiplyElements(array3) {
    // Tu código aquí ..
 
    const squareArray = array3.map(element => element ** 2);
 
    return squareArray;
 }

Array2 = multiplyElements( array3);

 console.log( Array2 );


 const AirPorts3 =  AirPorts.map( ( c1ty ) => {

    return {
        ...c1ty,
        flight: "DOmestic"
    };
 });

 console.log( AirPorts3);



 function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    const privateAtributos = {
      "_name": name,
    };
  
    const publicAtributos = {
      email,
      age,
      approvedCourses,
      learningPaths,

      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
      // readName() {
      //   return privateAtributos["_name"];
      // },
      // changeName(newName) {
      //   privateAtributos["_name"] = newName;
      // },

    get name() {
       
        if (newName.length != 0) { //  <....
            
            privateAtributos["_name"] = newName;
          } else {
            
            console.warn("Tu nombre debe tener al menos 1 caracter");
          }
        return privateAtributos["_name"];

      },

    set name(newName) { // <----
        
        privateAtributos["_name"] = newName;

      }

    };
  
    // Object.defineProperty(publicAtributos, "readName", {
    //   writable: false,
    //   configurable: false,
    // });
    // Object.defineProperty(publicAtributos, "changeName", {
    //   writable: false,
    //   configurable: false,
    // });
  
    return publicAtributos;
  }

