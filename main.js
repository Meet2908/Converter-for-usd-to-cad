
function convertCurrency() {
    // Selecting the input element and get its value 
    var usd_Amount = document.getElementById("left-inputl").value
    var cad_Amount = document.getElementById("right-input").value
    
    if(usd_Amount !== null && cad_Amount.length == 0){
            cad_Amount = 1.32*usd_Amount
            document.getElementById("right-input").value  = cad_Amount
    }else if(cad_Amount !== null && usd_Amount.length == 0){
            usd_Amount = 0.76*cad_Amount
            document.getElementById("left-inputl").value  = usd_Amount
    }
    else{
        alert("Inappropriate Input. Please Enter value in only one field")
    }
}