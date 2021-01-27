$(document).ready(function () {
    $("#myDiv").after("<input type='text', id='name' >");
    $("#name").after("<button type='text', id='button'> OK </button>");
    $("#button").click(function () {
        $("#button").after(`<h1>Hello there ${$("#name").val()} !`);

    })



})