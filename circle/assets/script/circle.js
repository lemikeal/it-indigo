"use strict";

        $( "#CircleForm" ).validate({

        });

        function displayCircle() {
            
            if ($("#CircleForm").valid()) {
                
                document.getElementById("circle").innerHTML = "";

                let radius;
                let radiusfp;
                let diameter;
                let diameterfp;
                let circumference;
                let circumferencefp;
                let area;
                let areafp;

                radius = document.getElementById("radius").value;
                diameter = document.getElementById("diameter").value;
                circumference = document.getElementById("circumference").value;
                area = document.getElementById("area").value;

                radiusfp = parseFloat( radiusfp );
                diameterfp = parseFloat( diameterfp );
                circumferencefp = parseFloat( circumferencefp );
                areafp = parseFloat( areafp );

                circle = calcCircle();

                document.getElementById("circle").innerHTML = circle.toString();
            }
        }

        function calcDiameter (radiusvalue) {
            
            return Math.abs(2*radiusvalue)
        }
        
        function calcCircumference (radiusvalue) {

            return Math.abs(2*Math.PI*radiusvalue)
        }

        function calcArea (radiusvalue) {

            return Math.abs(Math.PI*radiusvalue*radiusvalue)
        }

        function clearForm() {

            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("hypotenuse").innerHTML = "";
        }