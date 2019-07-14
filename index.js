var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
var female =["Akosua", "Adwaa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var male =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var document.getElementById("form");
var CC =document.getElementById("century").value;
var YY =document.getElementById("year").value;
var MM =document.getElementById("month").value;
var DD =document.getElementById("date").value;

function calculation(){

   maths = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD-1)%7;
   return (Math.round(maths));
}
function form(){
  var gender = document.getElementsByName("gender");
  if (gender[0].checked=true){
    gender="male";
  }else if (gender[1].checked=true) {
    gender="female";
  }else {
    alert("Gender invalid");
  }
  var calc = calculation();
  if (gender=="male"&& calc==0){ 
    console.log("Your Akan name is " + male[0]+"." + "You were born on: "+ days[0] );
  }
  else if (gender=="male"&& calc==1){
    console.log("Your Akan name is " + male[1]+"." + "You were born on: "+ days[1] );
  }
  else if (gender=="male"&& calc==2){
    console.log("Your Akan name is " + male[2]+"." + "You were born on: "+ days[2] );
  }
  else if (gender=="male"&& calc==3){
    console.log("Your Akan name is " + male[3]+"." + "You were born on: "+ days[3] );
  }
  else if (gender=="male"&&calc==4){
    console.log("Your Akan name is " + male[4]+"." + "You were born on: "+ days[4] );
  }
  else if (gender=="male"&& calc==5){
    console.log("Your Akan name is " + male[5]+"." + "You were born on: "+ days[5] );
  }
  else if (gender=="male"&& calc==6){
  console.log("Your Akan name is " + male[6]+"." + "You were born on: "+ days[6] );
  }
  else if (gender=="female"&& calc==0){
  console.log("Your Akan name is " + female[0]+"." + "You were born on: "+ days[0] );
  }
  else if (gender=="female"&& calc==1){
    console.log("Your Akan name is " + female[1]+"." + "You were born on: "+ days[1] );
  }
  else if (gender=="female"&& calc==2){
    console.log("Your Akan name is " + female[2]+"." + "You were born on: "+ days[2] );
  }
  else if (gender=="female"&& calc==3){
    console.log("Your Akan name is " + female[3]+"." + "You were born on: "+ days[3] );
  }
  else if (gender=="female"&& calc==4){
    console.log("Your Akan name is " + female[4]+"." + "You were born on: "+ days[4] );
  }
  else if (gender=="female"&& calc==5){
  console.log("Your Akan name is " + female[5]+"." + "You were born on: "+ days[5] );
  }
  else if (gender=="female"&& calc==6){
  console.log("Your Akan name is " + female[6]+"." + "You were born on: "+ days[6] );
  }
  else{
    console.log("Try Again");
  }


}
