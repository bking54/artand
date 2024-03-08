$(document).ready(function () {

    $('#clickme').click(function() {
        console.log('test');
        alert('test');
        $('.form-container').append('<p>TEST</p>');
    });

    //One Child
    $('#radio-1').click(function () {
        if($('#radio-1').is(':checked')) {
            alert('test');
        }
    });

    //Two Children
    $('#radio-2').click(function () {
        if($('#radio-2').is(':checked')) {
            alert('test');
        }
    });

    //Three Children
    $('#radio-3').click(function () {
        if($('#radio-3').is(':checked')) {
            alert('test');
        }
    });

    //Four Children
    $('#radio-4').click(function () {
        if($('#radio-4').is(':checked')) {
            alert('test');
        }
    });
});