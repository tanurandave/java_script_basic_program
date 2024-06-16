var securedMarks=90,gread;
if(securedMarks>=80){
   gread="A";
}
else if(securedMarks>=60&&securedMarks<80){
    gread="B";
}
else if(securedMarks>=35&&securedMarks<60){
    gread="C";
}
else{
    gread="Fail";
}
console.log(gread);