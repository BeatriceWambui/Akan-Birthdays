function validate(){
    if( document.formA.date.value == "" || document.formA.date.value< 0|| document.formA.date.value >31){
        alert( "Please enter a valid date of birth" );
        return false;
    }
    else if( document.formA.month.value == "" || document.formA.month.value.length<0){
        alert( "Please enter a valid month of birth" );
        return false;
    }
    else if( document.formA.year.value == "" || document.formA.year.value.length<0){
        alert( "Please enter a valid year of birth" );
        return false;
    }
    
    else if( document.formA.century.value == "" || document.formA.century.value.length<0) {
        alert( "Please enter a valid century" );
        return false;
    
    }
    else{
        console.log("error");
    }
}
var CC,YY,MM,DD, days,dayValue;
days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
males=["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
females=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function calculation(){
    DD = parseInt(document.getElementById("date").value); 
    MM = parseInt(document.getElementById("month").value);
    CC = parseInt(document.getElementById("century").value);
    YY = parseInt(document.getElementById("year").value);
    dayValue = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    alert(dayValue);
    return(Math.floor(dayValue));
}
function akanName(){
    var calc = calculation();
    gender = document.getElementsByName("gender");
    if (gender[0].checked==true){
        gender = "male";
    } 
    else if (gender[1].checked==true){
        gender = "female";
    }
    else{
        alert("Please select gender");
    }

    if(gender=="male" && calc==0){
     alert("Your Akan name is " +males[0] +"."+ "You were born on "+days[0]);
    } 
    else if (gender=="male" && calc==1){
        alert("Your Akan name is " +males[1] +"."+ "You were born on "+days[1]);
    }
    else if (gender=="male" && calc==2){
        alert("Your Akan name is " +males[2] +"."+ "You were born on "+days[2]);
    } 
    else if(gender=="male" && calc==3){
        alert("Your Akan name is " +males[3] +"."+ "You were born on "+days[3]);
    } 
    else if (gender=="male" && calc==4){
        alert("Your Akan name is " +males[4] + "."+"You were born on "+days[4]);
    } 
    else if (gender=="male" && calc==5){
        alert("Your Akan name is " +males[5] + "."+"You were born on "+days[5]);
    } 
    else if (gender=="male" && calc==6){
        alert("Your Akan name is " +males[6] +"."+ "You were born on "+days[6]);
    } 
    else if (gender=="female" && calc==0){
        alert("Your Akan name is " +females[0]+"."+" You were born on "+days[0]);
    } 
    else if(gender=="female" && calc==1){
        alert("Your Akan name is " +females[1]+"."+" You were born on "+days[1]);
    } 
    else if (gender=="female" && calc==2){
        alert("Your Akan name is " +females[2]+"."+" You were born on "+days[2]);
    } 
    else if (gender=="female" && calc==3){
        alert("Your Akan name is " +females[3] + "."+" You were born on "+days[3]);
    } 
    else if (gender=="female" && calc==4){
        alert("Your Akan name is " +females[4]+"."+" You were born on "+days[4]);
    } 
    else if(gender=="female" && calc==5){
        alert("Your Akan name is " +females[5]+"."+" You were born on "+days[5]);
    } 
    else if (gender=="female" && calc==6){
        alert("Your Akan name is " +females[6]+"."+" You were born on "+days[6]);
    } 
    else{
        console.log("try again")
    }
}

