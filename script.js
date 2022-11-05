let counter = document.getElementById("text");
let textInput = document.getElementById("text-input")

function decrease(){
    counter.innerHTML = parseInt(counter.innerHTML)-1;
}

function increase(){
    counter.innerHTML = parseInt(counter.innerHTML)+1;
}

function reset(){
    counter.innerHTML = 0;
}

function change(){
    let value = parseInt(textInput.value);
    if (Number.isInteger(value)){
        counter.innerHTML = textInput.value
    }
}

