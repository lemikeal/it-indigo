function calculate() {
    "use strict";

    let form = $( "#myform" );
    
    if (form.valid()) {
        
        let fromvalue = document.getElementById("FromValue").value;

        let fromunit;
        if (document.getElementById("Centimeters1").checked) {
            fromunit = document.getElementById("Centimeters1").value;
        }
        if (document.getElementById("Meters1").checked) {
            fromunit = document.getElementById("Meters1").value;
        }
        if (document.getElementById("Kilometers1").checked) {
            fromunit = document.getElementById("Kilometers1").value;
        }
        if (document.getElementById("Inches1").checked) {
            fromunit = document.getElementById("Inches1").value;
        }
        if (document.getElementById("Feet1").checked) {
            fromunit = document.getElementById("Feet1").value;
        }
        if (document.getElementById("Yards1").checked) {
            fromunit = document.getElementById("Yards1").value;
        }
        if (document.getElementById("Miles1").checked) {
            fromunit = document.getElementById("Miles1").value;
        }
        
        let tounit = document.getElementById("ToUnit").value;
        if (document.getElementById("Centimeters2").checked) {
            fromunit = document.getElementById("Centimeters2").value;
        }
        if (document.getElementById("Meters2").checked) {
            fromunit = document.getElementById("Meters2").value;
        }
        if (document.getElementById("Kilometers2").checked) {
            fromunit = document.getElementById("Kilometers2").value;
        }
        if (document.getElementById("Inches2").checked) {
            fromunit = document.getElementById("Inches2").value;
        }
        if (document.getElementById("Feet2").checked) {
            fromunit = document.getElementById("Feet2").value;
        }
        if (document.getElementById("Yards2").checked) {
            fromunit = document.getElementById("Yards2").value;
        }
        if (document.getElementById("Miles2").checked) {
            fromunit = document.getElementById("Miles2").value;
        }

        CalculateResult(fromvalue, fromunit, tounit);
    }
}

async function CalculateResult(fromvalue, fromunit, tounit) {
    "use strict;"
        
        let myURL = "https://brucebauer.info/assets/ITEC3650/gethint.php?Name=E";

        myURL = myURL + "?FromValue=" + encodeURIComponent(fromvalue) + "&FromUnit=" + encodeURIComponent(fromunit) + "&ToUnit=" + encodeURIComponent(tounit);

        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("Centimeters1").checked = false;
    document.getElementById("Meters1").checked = false;
    document.getElementById("Kilometers1").checked = false;
    document.getElementById("Inches1").checked = false;
    document.getElementById("Feet1").checked = false;
    document.getElementById("Yards1").checked = false;
    document.getElementById("Miles1").checked = false;
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("Centimeters2").checked = false;
    document.getElementById("Meters2").checked = false;
    document.getElementById("Kilometers2").checked = false;
    document.getElementById("Inches2").checked = false;
    document.getElementById("Feet2").checked = false;
    document.getElementById("Yards2").checked = false;
    document.getElementById("Miles2").checked = false;
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("ToValue").innerHTML = "";
}

$( "#myform" ).validate({

});