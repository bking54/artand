$(document).ready(function () {

    //Page setup
    $('#parent-2').hide();
    $('.parent-2-fields').prop('required', false);
    $('#camper-2').hide();
    $('#camper-3').hide();
    $('#camper-4').hide();
    $('.camper-2-fields').prop('required', false);
    $('.camper-3-fields').prop('required', false);
    $('.camper-4-fields').prop('required', false);

    //How many campers? Radio Button Group
    $('#radio-1').click(function () {
        if($('#radio-1').is(':checked')) {
            $('#camper-2').hide();
            $('#camper-3').hide();
            $('#camper-4').hide();
            $('.camper-2-fields').prop('required', false);
            $('.camper-3-fields').prop('required', false);
            $('.camper-4-fields').prop('required', false);
        }
    });
    $('#radio-2').click(function () {
        if($('#radio-2').is(':checked')) {
            $('#camper-2').show();
            $('#camper-3').hide();
            $('#camper-4').hide();
            $('.camper-2-fields').prop('required', true);
            $('.camper-3-fields').prop('required', false);
            $('.camper-4-fields').prop('required', false);
        }
    });
    $('#radio-3').click(function () {
        if($('#radio-3').is(':checked')) {
            $('#camper-2').show();
            $('#camper-3').show();
            $('#camper-4').hide();
            $('.camper-2-fields').prop('required', true);
            $('.camper-3-fields').prop('required', true);
            $('.camper-4-fields').prop('required', false);
        }
    });
    $('#radio-4').click(function () {
        if($('#radio-4').is(':checked')) {
            $('#camper-2').show();
            $('#camper-3').show();
            $('#camper-4').show();
            $('.camper-2-fields').prop('required', true);
            $('.camper-3-fields').prop('required', true);
            $('.camper-4-fields').prop('required', true);
        }
    });

    //Add  and remove Another Parent
    $('#extra-parent').click(function () {
        $('#parent-2').toggle();
        if ($('#extra-parent').is(':checked')) {
            $('.parent-2-fields').prop('required', true);
        } else {
            $('.parent-2-fields').prop('required', false);
        }
    });

    //Ensure at least one camp is selected
    $('#camp1-check-1').click(function() {
        let result = true;
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp1-check-1').prop('checked', true);
        }
    });
    $('#camp2-check-1').click(function() {
        let result = true;
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp2-check-1').prop('checked', true);
        }
    });
    $('#camp3-check-1').click(function() {
        let result = true;
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp3-check-1').prop('checked', true);
        }
    });
    $('#camp4-check-1').click(function() {
        let result = true;
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp4-check-1').prop('checked', true);
        }
    });
});