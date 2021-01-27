$(document).ready(function () {
    $("#myColor").append("<option selected></option>")
    $("#myColor").append(`<option value="Grey">Grey</option>`);
    $("#myColor").change(function () {
        let selected = $("option:selected").val();
        $("#content").text(selected)
    
    })


    $("input").click(function () {
        $("option").remove();
        $("#content").text("")
    })




})