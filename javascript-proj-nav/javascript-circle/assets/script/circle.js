"use strict";

        $( "#CircleForm" ).validate({

        });

        function displayDiameter() {
            
            if ($("#CircleForm").valid()) {
                
                document.getElementById("diameter").innerHTML = "";

                let radius;
                let radiusfp;
                let diameter;
                let result;

                radius = document.getElementById("radius").value;
                diameter = document.getElementById("diameter").value;

                radiusfp = parseFloat( radiusfp );

                diameter = calcDiameter(radiusfp);

                document.getElementById("diameter").innerHTML = diameter.toString();
            }
        }

        function displayCircumference() {
            
            if ($("#CircleForm").valid()) {
                
                document.getElementById("circumference").innerHTML = "";

                let radius;
                let radiusfp;
                let circumference;
                let result;

                radius = document.getElementById("radius").value;
                circumference = document.getElementById("circumference").value;

                radiusfp = parseFloat( radiusfp );

                circumference = calcCircumference(radiusfp, Math.PI);

                document.getElementById("circumference").innerHTML = circumference.toString();
            }
        }

        function displayArea() {
            
            if ($("#CircleForm").valid()) {
                
                document.getElementById("area").innerHTML = "";

                let radius;
                let radiusfp;
                let area;
                let result;

                radius = document.getElementById("radius").value;
                area = document.getElementById("area").value;

                radiusfp = parseFloat( radiusfp );

                area = calcArea(radiusfp, Math.PI);

                document.getElementById("area").innerHTML = area.toString();
            }
        }

        function calcDiameter (radiusvalue) {
            
            return Math.abs(2*radiusvalue)
        }
        
        function calcCircumference (radiusvalue) {

            return Math.abs(2*Math.PI*radiusvalue)
        }

        function calcArea (radiusvalue) {

            return Math.abs((Math.PI) * (radiusvalue*radiusvalue))
        }

        function clearForm() {

            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("diameter").innerHTML = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
        }