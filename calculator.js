// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Function to append numbers and operators to the display
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById("display").value;
    try {
      // Use the eval function to evaluate the expression entered
      const result = eval(display);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  