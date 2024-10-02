// Get the display element safely, ensuring it's an HTMLInputElement
var display = document.getElementById("display");
function appendToDisplay(input) {
    if (display) {
        display.value += input;
    }
}
function clearDisplay() {
    if (display) {
        display.value = "";
    }
}
function calculate() {
    if (display) {
        try {
            // Perform the calculation using eval, and safely handle errors
            display.value = eval(display.value);
        }
        catch (error) {
            display.value = "Error";
        }
    }
}
