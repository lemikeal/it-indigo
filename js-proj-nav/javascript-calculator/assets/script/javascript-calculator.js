function calculate() {
    "use strict";
    if ($( "#myform" ).valid()) {
        
        let operand1 = document.getElementById("Operand1").value;
        let operand2 = document.getElementById("Operand2").value;
        
        let operand1fp = parseFloat (operand1);
        let operand2fp = parseFloat (operand2);
    
        let operator;
        if (document.getElementById("AddOperator").checked) {
            operator = document.getElementById("AddOperator").value;
        }
        if (document.getElementById("SubOperator").checked) {
            operator = document.getElementById("SubOperator").value;
        }
        if (document.getElementById("MulOperator").checked) {
            operator = document.getElementById("MulOperator").value;
        }
        if (document.getElementById("DivOperator").checked) {
            operator = document.getElementById("DivOperator").value;
        }

        let result;
        
        if (operator == "Add") {
            result = (operand1fp + operand2fp);
        }
 
        if (operator == "Sub") {
            result = (operand1fp - operand2fp);
        }

        if (operator == "Mul") {
            result = (operand1fp * operand2fp);
        }

        if (operator == "Div") {
            result = (operand1fp / operand2fp);
        }
        
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubOperator").checked = false;
    document.getElementById("MulOperator").checked = false;
    document.getElementById("DivOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({
 
});