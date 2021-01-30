$(document).ready(function () {
    let button = $("input");
    button.click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            success: function (result) {
                for (let i of result) {
                    console.log(`Id: ${i.id} Title: ${i.title}`)
                    if (i.completed === true) {
                        console.log("Completed");
                    }
                    else {
                        console.log("Not completed");
                    }
                    return;
                }
            }
        })
    })




})