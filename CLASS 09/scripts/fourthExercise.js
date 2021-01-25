
$("#button").click(function(){
    $(".select").append(`<option>${$("#input").val()}</option>`);
})

    $("#input").blur(function(){
        if($("#input").val()==""){
     $(".select").after("Please enter value");
        }
    
})