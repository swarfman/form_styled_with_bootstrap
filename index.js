var elements = document.querySelector("#form1");
elements.addEventListener ("submit", (e) => {
    //alert("Is this working");
    e.preventDefault();
    
    let ccn = document.querySelector("#validationCustom01");
    if (ccn.value.length !== 16 ){
        document.querySelector("#validationCustom01").style.background = "red";
    }
        
    let cvcn = document.querySelector("#validationCustom02");
    if (cvcn.value.length !== 3){
        document.querySelector("#validationCustom02").style.background = "red";
    }
    
    let amn = document.querySelector("#validationCustomAmount");
    if (amn.value < 49.99){
        document.querySelector("#validationCustomAmount").style.background = "red";
    }
    
    let fname = document.querySelector("#validationCustom03");
    if (fname.value === ""){
        document.querySelector("#validationCustom03").style.background = "red";
    }
    
    let lname = document.querySelector("#validationCustom04");
    if (lname.value === ""){
        document.querySelector("#validationCustom04").style.background = "red";
    }
    
    let city = document.querySelector("#validationCustom05");
    if (city.value === ""){
        document.querySelector("#validationCustom05").style.background = "red";
    }
    
    let zip = document.querySelector("#validationCustom06");
    if (zip.value === ""){
        document.querySelector("#validationCustom06").style.background = "red";
    }
    
     let state = document.querySelector("#validationCustom07");
    if (state.value === ""){
        document.querySelector("#validationCustom07").style.background = "red";
    }

        
    else {
        return;
    }
});