$(document).ready(function () {
    $("div").first().after(`Enter text: <input type: "text" >`);
    $("input").after(`<br> <br> Enter color: <input type: "text">`);
    $("input").last().after(`<br> <br> <button type:"text"> Generate h1 </button>`)
    $("div").last().after(`<h3 id="message"></h3>`);


    $("input").first().click(function () {
        $("input").first().val("");
    })
    $("input").last().click(function () {
        $("input").last().val("");
    })



    $("button").click(function () {
        if ($("input").first().val() !== "" && $("input").last().val() !== "") {
            $("#message").text(`Text: ${$("input").first().val()} Color: ${$("input").last().val()}`);
        }
        else if (typeof ($("input").first().val()) !== 'string' && $("input").last().val() !== 'string') {
            $("#message").text("Fill the inputs");
        }
        else {
            $("#message").text("Fill the inputs");
        }

    })








})