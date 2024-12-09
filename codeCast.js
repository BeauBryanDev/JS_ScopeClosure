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



