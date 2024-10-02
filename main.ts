// Get the display element safely, ensuring it's an HTMLInputElement
const display = document.getElementById("display") as HTMLInputElement | null;

function appendToDisplay(input: string): void {
  if (display) {
    display.value += input;
  }
}

function clearDisplay(): void {
  if (display) {
    display.value = "";
  }
}

function calculate(): void {
  if (display) {
    try {
      // Perform the calculation using eval, and safely handle errors
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
}
