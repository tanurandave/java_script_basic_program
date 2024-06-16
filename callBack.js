function callBack1(name,age){
console.log(`name:${name},age:${age}`);
}

function callBack2(age){
    console.log(`age:${age}`);
    }
    
function dowork(name,age){
    name="mrs:"+name;
    age++;
    callBack1(name,age);
    }
dowork("tanuja",20);