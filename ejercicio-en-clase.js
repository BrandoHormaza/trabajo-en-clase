var one = "es una prueba1";
var two = "es otra prueba2";
var three = "prueba";

var array = [one, two, three];

console.log(Array);


if (array[0].indexOf(two)!= -1) {
    console.log("la variable esta contenida en"+ two); 
}
    
if (array[0].indexOf(three)!= -1) {
    console.log("la variable esta contenida en"+ three); 
}


if (array[1].indexOf(one)!= -1) {
    console.log("la variable esta contenida en"+ one); 
}

if (array[1].indexOf(three)!= -1) {
    console.log("la variable esta contenida en two");
}

if (array[2].indexOf(one)!= -1) {
    console.log("la variable esta contenida en"+ one);
}

if (array[2].indexOf(two)!= -1) {
    console.log("la variable three esta contenida en la variable two");
}