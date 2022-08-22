const text = document.getElementById("text");
text.innerHTML = "Hello";

var code = "Who are you";
var value = 3;

function cesar(str, key) {
    let ascii = [];

    for (let i = 0; i < str.length; ++i) {
        ascii[i] = str.charCodeAt(i) + key;
        if (ascii[i] - key == 111) {
            ascii[i] = " "
        }
    }

    for (let i = 0; i < str.length; ++i) {
        console.log(ascii[i]);
    }
}

text.innerHTML = cesar(code, value);
