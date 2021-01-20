let array = ["John", "very happy", "sleeping"];

function tellStory() {
    alert(`This is ${array[0]}. ${array[0]} is a nice person. Today he/she is ${array[1]}. He/She is ${array[2]} all day. The end.`)
}
tellStory(...array);

// Second attempt

function story(arr) {
    alert(`This is ${arr[0]}. ${arr[0]} is a nice person. Today he/she is ${arr[1]}. He/She is ${arr[2]} all day. The end.`);
}

story(["Amy", "sad", "lazy"]);








