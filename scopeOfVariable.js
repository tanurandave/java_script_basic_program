//scope of variable
 
var a=10;//global variable
let b=20;// global variable

console.log(a);
console.log(b);

function add(){
var c=50;//local variable
let d=89;// local variable

console.log(c);
console.log(d);
for(let i=0;i<=3;i++){ //i is block level variable
console.log(i);
}
}