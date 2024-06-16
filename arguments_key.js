//all program execute one by one then see output
//first program

let getCartBill=function(){
   
    console.log(arguments);

};
getCartBill(20);
getCartBill(20,10);
getCartBill(20,"hii",10.5);
getCartBill(20,10.2);
//Second program
/*
let getCartBil1=function(){
   
    console.log(arguments.length);

};
getCartBi1l(20);
getCartBil1(20,10);
getCartBil1(20,"hii",10.5);
getCartBil1(20,10.2); */
//third program
/*
let getCartBil=function(){
    for(let i=0;i<arguments.length;i++){
    console.log(arguments[i]);
}
};
getCartBil(20);
getCartBil(20,10);
getCartBil(20,"hii",10.5);
getCartBil(20,10.2);
*/