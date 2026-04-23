$(document).ready(function () {

    $('#Calculate').click(function () {
        $('.error').text('');
        $('#ToValue').val('');

        const fromValue = $('#FromValue').val().trim();
        const fromUnit = $('input[name="FromUnit"]:checked').val();
        const toUnit = $('input[name="ToUnit"]:checked').val();

        let valid = true;

        if (!fromValue) {
            $('#FromValueMsg').text('From Value is Required');
            valid = false;
        }
        if (!fromUnit) {
            $('#FromUnitMsg').text('From Unit is Required');
            valid = false;
        }
        if (!toUnit) {
            $('#ToUnitMsg').text('To Unit is Required');
            valid = false;
        }
        if (!valid) return;

        $.ajax({
            url: 'https://brucebauer.info/assets/ITEC3650/unitsconversion.php',
            type: 'GET',
            data: { FromValue: fromValue, FromUnit: fromUnit, ToUnit: toUnit },
            success: function (result) {
                $('#ToValue').val(result);
            },
            error: function () {
                $('#ToValue').val('Error Retrieving Conversion');
            }
        });
    });

    $('#Clear').click(function () {
        $('#myform')[0].reset();
        $('.error').text('');
        $('#ToValue').val('');
    });

});