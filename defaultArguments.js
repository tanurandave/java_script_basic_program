let getNetPrize=function(prize,tax=18){
   let netPrize=prize+(prize*tax/100);
   return netPrize;
};
console.log(getNetPrize(1000,20));
console.log(getNetPrize(1000));