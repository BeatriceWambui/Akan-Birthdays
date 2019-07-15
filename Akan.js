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