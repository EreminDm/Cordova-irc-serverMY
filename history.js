
var History = [];


function history(message) {



if (History.length < 10) {

    History.push(message);
}
else {
    History.shift(message);
    History.push(message);
}}

for (message = 0; message < 20; message++) {
  history(message);
}
console.log(History);
    
var copy= History.slice(0);
console.log(copy);
var f;
//for (f=0;f<copy.length;f++){
    
f=History.shift(copy.length);}

/*if (copy.length>1){
copy.shift();
}
}
else{ var t=copy.shift();}*/

    console.log(f);


