// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

// This function take action when the "Encriptar" button is clicked.
function encrypt(){
    var text = document.getElementById("inputBox").value.toLowerCase();
    var chars = {'a':"ai", 'e':"enter", 'i':"imes", 'o':"ober", 'u':"ufat"};
    var encrypted = text.replace(/[aeiou]/g, m => chars[m]);
    

    if (checkSpecialChars(text) == true) {
        // Hidden and appear new elements into the document, showing the message.
        document.getElementById('draw').style.display = "none";
        document.getElementById('text1').style.display = "none";
        document.getElementById('text2').style.display = "none";
        document.getElementById('output').style.display = "block";
        document.getElementById('button-copy').style.display = "block";

        document.getElementById('output').value = encrypted;
    } else{
        alert("Debe ingresar un mensaje valido.\n\t- Sin caracteres especiales.\n\t- Campo vacio.")
    }
}

// This function take action when the "Desencriptar" button is clicked.
function decrypt(){
    var text = document.getElementById("inputBox").value.toLowerCase();
    var chars = {"ai":'a', "enter":'e', "imes":'i', "ober":'o', "ufat":'u'};

    var re = new RegExp(Object.keys(chars).join("|"), "gi");
    var decrypted = text.replace(re, function(matched){
        return chars[matched];
    }
    );

    document.getElementById('draw').style.display = "none";
    document.getElementById('text1').style.display = "none";
    document.getElementById('button-copy').style.display = "block";
    document.getElementById('output').value = decrypted;
}

// Function checks if the user inputted a message with special chars.
function checkSpecialChars(str){
    // Checks if the message is not empty.
    if (str.length == 0) {
        return false;
    }

    str = str.replace(/ /gi, "");

    // traverse the array and convert the chars to ascii code, and checks
    // for invalid chars.
    for (let i = 0; i < str.length; ++i) {
        let ascii = str.charCodeAt(i);
        
        if (ascii < 97 || ascii > 122) {
            return false; 
        }
    }
    return true;
}

function copy() {
    var textCopy = document.getElementById("output");
    textCopy.select();
    textCopy.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(textCopy.value);
}
