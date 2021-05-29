function generateQRCode() {
    //gets the word we want to turn into a qr code
    var data = document.getElementById("data").value;
    if (data != "") {
        //calls the python function - the function returns an image
        eel.generate_qr(data)(setImage);   
    }
}

function setImage(base64) {
    //sets the qr code to the img
    document.getElementById("qr").src = base64;
    //gives the elemtn a border so its easier to see
    document.getElementById("qr").style.border = "thick solid #7f40d7";
    document.getElementById("qr").style.borderRadius = "25px";
    //gets the description so we can display it under the qr code
    document.getElementById("qrCodeDescription").innerHTML = '"' + document.getElementById("data").value + '"';
    document.getElementById("data").value = "";
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        generateQRCode();
    }
});