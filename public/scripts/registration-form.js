$(document).ready(function () {

    //Page setup
    $('#parent-2').hide();
    $('.parent-2-fields').prop('required', false);
    $('#pickup-1, #pickup-2, #pickup-3').hide();
    $('.pickup-1-fields, .pickup-2-fields, .pickup-3-fields').prop('required', false);
    $('#camper-2').hide();
    $('#camper-3').hide();
    $('#camper-4').hide();
    $('.camper-2-fields').prop('required', false);
    $('.camper-3-fields').prop('required', false);
    $('.camper-4-fields').prop('required', false);

    //Add  and remove Another Parent
    $('#extra-parent').click(function () {
        $('#parent-2').toggle();
        if ($('#extra-parent').is(':checked')) {
            $('.parent-2-fields').prop('required', true);
        } else {
            $('.parent-2-fields').prop('required', false);
        }
    });

    //Add another pickup
    $('#add-pickup').click(function () {
        if ($('#pickup-1').is(':hidden')) {
            $('#pickup-1').show();
            $('.pickup-1-fields').prop('required', true);
            $('#has-pickup-1').val('true');
        } else if ($('#pickup-2').is(':hidden')) {
            $('#pickup-2').show();
            $('.pickup-2-fields').prop('required', true);
            $('#has-pickup-2').val('true');
        } else if ($('#pickup-3').is(':hidden')) {
            $('#add-pickup').hide();
            $('#pickup-3').show();
            $('.pickup-3-fields').prop('required', true);
            $('#has-pickup-3').val('true');
        }
    });

    //Remove a pickup
    //WIP

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

    //Match checkboxes with hidden inputs
    //Ensure at least one camp is selected
    $('#camp1-check-1').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp1-check-1').prop('checked', true);
        } else if ($('#camp1-check-1').is(':checked')) {
            //update hidden inputs
            $('#pmz-1').val('true');
        } else {
            $('#pmz-1').val('false');
        }
    });
    $('#camp2-check-1').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp2-check-1').prop('checked', true);
        } else if ($('#camp2-check-1').is(':checked')) {
            //update hidden inputs
            $('#tif-1').val('true');
        } else {
            $('#tif-1').val('false');
        }
    });
    $('#camp3-check-1').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp3-check-1').prop('checked', true);
        }
        else if ($('#camp3-check-1').is(':checked')) {
            //update hidden inputs
            $('#geo-1').val('true');
        } else {
            $('#geo-1').val('false');
        }
    });
    $('#camp4-check-1').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-1').is(':checked') || $('#camp2-check-1').is(':checked') || $('#camp3-check-1').is(':checked') || $('#camp4-check-1').is(':checked'))) {
            $('#camp4-check-1').prop('checked', true);
        } else if ($('#camp4-check-1').is(':checked')) {
            //update hidden inputs
            $('#tum-1').val('true');
        } else {
            $('#tum-1').val('false');
        }
    });
    $('#camp1-check-2').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-2').is(':checked') || $('#camp2-check-2').is(':checked') || $('#camp3-check-2').is(':checked') || $('#camp4-check-2').is(':checked'))) {
            $('#camp1-check-2').prop('checked', true);
        } else if ($('#camp1-check-2').is(':checked')) {
            //update hidden inputs
            $('#pmz-2').val('true');
        } else {
            $('#pmz-2').val('false');
        }
    });
    $('#camp2-check-2').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-2').is(':checked') || $('#camp2-check-2').is(':checked') || $('#camp3-check-2').is(':checked') || $('#camp4-check-2').is(':checked'))) {
            $('#camp2-check-2').prop('checked', true);
        } else if ($('#camp2-check-2').is(':checked')) {
            //update hidden inputs
            $('#tif-2').val('true');
        } else {
            $('#tif-2').val('false');
        }
    });
    $('#camp3-check-2').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-2').is(':checked') || $('#camp2-check-2').is(':checked') || $('#camp3-check-2').is(':checked') || $('#camp4-check-2').is(':checked'))) {
            $('#camp3-check-2').prop('checked', true);
        } else if ($('#camp3-check-2').is(':checked')) {
            //update hidden inputs
            $('#geo-2').val('true');
        } else {
            $('#geo-2').val('false');
        }
    });
    $('#camp4-check-2').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-2').is(':checked') || $('#camp2-check-2').is(':checked') || $('#camp3-check-2').is(':checked') || $('#camp4-check-2').is(':checked'))) {
            $('#camp4-check-2').prop('checked', true);
        } else if ($('#camp4-check-2').is(':checked')) {
            //update hidden inputs
            $('#tum-2').val('true');
        } else {
            $('#tum-2').val('false');
        }
    });
    $('#camp1-check-3').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-3').is(':checked') || $('#camp2-check-3').is(':checked') || $('#camp3-check-3').is(':checked') || $('#camp4-check-3').is(':checked'))) {
            $('#camp1-check-3').prop('checked', true);
        } else if ($('#camp1-check-3').is(':checked')) {
            //update hidden inputs
            $('#pmz-3').val('true');
        } else {
            $('#pmz-3').val('false');
        }
    });
    $('#camp2-check-3').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-3').is(':checked') || $('#camp2-check-3').is(':checked') || $('#camp3-check-3').is(':checked') || $('#camp4-check-3').is(':checked'))) {
            $('#camp2-check-3').prop('checked', true);
        } else if ($('#camp2-check-3').is(':checked')) {
            //update hidden inputs
            $('#tif-3').val('true');
        } else {
            $('#tif-3').val('false');
        }
    });
    $('#camp3-check-3').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-3').is(':checked') || $('#camp2-check-3').is(':checked') || $('#camp3-check-3').is(':checked') || $('#camp4-check-3').is(':checked'))) {
            $('#camp3-check-3').prop('checked', true);
        } else if ($('#camp3-check-3').is(':checked')) {
            //update hidden inputs
            $('#geo-3').val('true');
        } else {
            $('#geo-3').val('false');
        }
    });
    $('#camp4-check-3').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-3').is(':checked') || $('#camp2-check-3').is(':checked') || $('#camp3-check-3').is(':checked') || $('#camp4-check-3').is(':checked'))) {
            $('#camp4-check-3').prop('checked', true);
        } else if ($('#camp4-check-3').is(':checked')) {
            //update hidden inputs
            $('#tum-3').val('true');
        } else {
            $('#tum-3').val('false');
        }
    });
    $('#camp1-check-4').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-4').is(':checked') || $('#camp2-check-4').is(':checked') || $('#camp3-check-4').is(':checked') || $('#camp4-check-4').is(':checked'))) {
            $('#camp1-check-4').prop('checked', true);
        } else if ($('#camp1-check-4').is(':checked')) {
            //update hidden inputs
            $('#pmz-4').val('true');
        } else {
            $('#pmz-4').val('false');
        }
    });
    $('#camp2-check-4').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-4').is(':checked') || $('#camp2-check-4').is(':checked') || $('#camp3-check-4').is(':checked') || $('#camp4-check-4').is(':checked'))) {
            $('#camp2-check-4').prop('checked', true);
        } else if ($('#camp2-check-4').is(':checked')) {
            //update hidden inputs
            $('#tif-4').val('true');
        } else {
            $('#tif-4').val('false');
        }
    });
    $('#camp3-check-4').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-4').is(':checked') || $('#camp2-check-4').is(':checked') || $('#camp3-check-4').is(':checked') || $('#camp4-check-4').is(':checked'))) {
            $('#camp3-check-4').prop('checked', true);
        } else if ($('#camp3-check-4').is(':checked')) {
            //update hidden inputs
            $('#geo-4').val('true');
        } else {
            $('#geo-4').val('false');
        }
    });
    $('#camp4-check-4').click(function() {
        //verify at least one camp is selected
        if (!($('#camp1-check-4').is(':checked') || $('#camp2-check-4').is(':checked') || $('#camp3-check-4').is(':checked') || $('#camp4-check-4').is(':checked'))) {
            $('#camp4-check-4').prop('checked', true);
        } else if ($('#camp4-check-4').is(':checked')) {
            //update hidden inputs
            $('#tum-4').val('true');
        } else {
            $('#tum-4').val('false');
        }
    });
});