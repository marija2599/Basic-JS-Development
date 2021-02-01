$("#btnPeople").click(function () {

    $.ajax({
        url: "https://swapi.dev/api/people/?page=2",
        success: function (result) {
            $(".container").text(`Name : ${result}`)

        }

    })

})

$("#btnShips").click(function () {

    $.ajax({
        url: "https://swapi.dev/api/starships/?page=1",
        success: function (result) {
            $(".container").text(+ result)
        }

    })

})