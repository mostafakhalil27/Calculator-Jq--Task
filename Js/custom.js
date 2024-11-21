var op = ""; // To store the selected operation
var firstNumber = ""; // First input value
var secondNumber = ""; // Second input value

// Update the display of input fields
function updateDisplay() {
    if (op) {
        $(".display").val(secondNumber); // Update the second number field when an operation is selected
    } else {
        $(".display").val(firstNumber); // Update the first number field
    }
}

$(function () {
    // Add number to the active input
    $(".number").click(function () {
        const num = $(this).val();
        if (op) {
            secondNumber += num; // Append to the second number if an operation is selected
        } else {
            firstNumber += num; // Append to the first number
        }
        updateDisplay(); // Update the display
    });

    // Set operation on click
    $(".operations").click(function () {
        if (firstNumber && !op) { // Make sure first number is entered before operation
            op = $(this).val(); // Store the selected operation (+, -, *, /)
            updateDisplay(); // Update the display to show the second number
        }
    });

    // Calculate the result
    $(".equals").click(function () {
        if (firstNumber && secondNumber && op) {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            let result;

            // Perform the operation based on the operator
            switch (op) {
                case "p":
                    result = num1 + num2;
                    break;
                case "s":
                    result = num1 - num2;
                    break;
                case "m":
                    result = num1 * num2;
                    break;
                case "d":
                    result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
                    break;
                default:
                    result = "Error: Invalid operation";
            }

            // Display the result
            $(".display").val(result);

            // Reset the calculator state after calculating the result
            firstNumber = "";
            secondNumber = "";
            op = "";
        }
    });

    // Clear the display and reset all variables
    $("#clear").click(function () {
        firstNumber = "";
        secondNumber = "";
        op = "";
        $(".display").val("");
    });
});
