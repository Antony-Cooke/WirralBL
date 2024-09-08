$(document).ready(function () {

    // jQuery methods go here...
    $(".OCA").hide();
    $(".OCB").hide();
    $(".TOM").hide();
    $(".TIX").hide();
    $(".LYC").hide();
    $(".RAF").hide();
    $(".GTM").hide();
    $(".EHG").hide();

    $('#btn1').click(function () {
        $(".OCA").toggle();
    });

    $('#btn2').click(function () {
        $(".OCB").toggle();
    });

    $('#btn3').click(function () {
        $(".TOM").toggle();
    });

    $('#btn4').click(function () {
        $(".TIX").toggle();
    });

    $('#btn5').click(function () {
        $(".LYC").toggle();
    });

    $('#btn6').click(function () {
        $(".RAF").toggle();
    });

    $('#btn7').click(function () {
        $(".GTM").toggle();
    });

    $('#btn8').click(function () {
        $(".EHG").toggle();
    });
});