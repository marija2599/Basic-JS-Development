a = $("input").first().val()
b = $("#second").val()

$("#button").click(function(a,b){
    if(isNaN(a) || isNaN(b)){
    $("#button").after("Error")
    }
     else{
        let area =a*b;
        $("p").text(`The area is ${area}`);
     }
   
})


// $("p").mouseover(function(){
    
// })