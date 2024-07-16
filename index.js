// Addition Function
function addition(numberA, numberB) {
    return numberA + numberB;
}

// Subtraction function
function subtraction(numberA, numberB) {
    return numberA - numberB;
}

// Multiply function
function multiply(numberA, numberB) {
    return numberA * numberB;
}

// Divide Function
function divide(numberA, numberB) {
    if (numberB == 0) {
        throw new Error("Sorry, we cannot divide by 0");
    }
    return numberA / numberB;
}

let restart;

do {
    // Asking for a choice
    let choice;
    do {
        choice = Number(prompt("What calculation do you want to do?\n\n1 - Addition\n2 - Subtraction\n3 - Multiply\n4 - Division\n"));
    } while (choice != 1 && choice != 2 && choice != 3 && choice != 4);

    // Asking for 2 numbers
    let firstNumber, secondNumber;
    do {
        firstNumber = Number(prompt("Enter the first number:"));
        secondNumber = Number(prompt("Enter the second number:"));
    } while (isNaN(firstNumber) || isNaN(secondNumber));

    // Call the function using try catch
    try {
        let result;
        switch (choice) {
            case 1:
                result = addition(firstNumber, secondNumber);
                break;
            case 2:
                result = subtraction(firstNumber, secondNumber);
                break;
            case 3:
                result = multiply(firstNumber, secondNumber);
                break;
            case 4:
                result = divide(firstNumber, secondNumber);
                break;
            default:
                throw new Error("An error occurred");
        }
        // Display results
        alert("Here is the result: " + result);
    } catch (error) {
        alert(error); // if an error occurred, display the error
    }

    restart = confirm("Do you want to do another calculation?"); // Asking if we want to restart with Confirm()
} while (restart);
