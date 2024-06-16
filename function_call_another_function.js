//first example
function show(){
    console.log("hello this is show");
    showCity();
}
function showCity(){
    console.log("India");
}
show();
//second example
let square=function(n){
    return n*n;
};
let cube=function(n){
    return square(n)*n;
}
console.log(cube(5));