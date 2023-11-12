function convert() {
    var meters = document.getElementById('metersInput').value;
    if (meters) {
        var feet = meters * 3.28084;
        document.getElementById('result').innerText = meters + " meters = " + feet.toFixed(2) + " feet";
    } else {
        document.getElementById('result').innerText = "Chon so meter hop le.";
    }
}