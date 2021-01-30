let button = document.getElementById("button");

button.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            response.json()
                .then(data => {
                    for (let i of data) {
                        console.log(`Id: ${i.id} Title: ${i.title}`);
                        if (i.completed === true) {
                            console.log("Completed!");
                        }
                        else {
                            console.log("Not completed!");
                        }
                        return;
                    }
                })
        })
        .catch(err=> {
            console.log(err);
        })
})
