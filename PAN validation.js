function validatePAN() {
    var panNumber = document.getElementById("pan").value;
    var pattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    var message = document.getElementById("message");

    if (pattern.test(panNumber)) {
        message.innerHTML = "Valid PAN Number";
        message.style.color = "green";
    } else {
        message.innerHTML = "Invalid PAN Number";
        message.style.color = "red";
    }
}