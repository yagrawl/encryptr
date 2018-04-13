function encrypt(text, key) {
    let output = document.getElementById("encryptedtext");
    let adder = 0
    let encryptedText = '';
    for(let i = 0; i < key.length; i++) {
        adder += key.charCodeAt(i);
    }
    adder %= 128;

    for(let i = 0; i < text.length; i++) {
        if(text.charCodeAt(i) + adder < 128) {
            encryptedText += String.fromCharCode(text.charCodeAt(i) + adder);
        }
        else {
            encryptedText += String.fromCharCode(text.charCodeAt(i) + adder - 128);
        }
    }
    output.textContent = encryptedText;
}

function decrypt(text, key) {
    let output = document.getElementById("decryptedtext");
    let subtracter = 0;
    let decryptedText = '';
    for(let i = 0; i < key.length; i++) {
        subtracter += key.charCodeAt(i);
    }
    subtracter %= 128;

    for(let i = 0; i < text.length; i++) {
        decryptedText += String.fromCharCode(text.charCodeAt(i) - subtracter);
    }
    output.textContent = decryptedText;
}
