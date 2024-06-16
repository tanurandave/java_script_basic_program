var securedMarks=60,gread;
if(securedMarks>=35){
   gread="A";

 if(securedMarks>=60&&securedMarks<80){
    gread="B";
}
else if(securedMarks>=35&&securedMarks<60){
    gread="C";
}
}
else{
    gread="Fail";
}

console.log(gread);