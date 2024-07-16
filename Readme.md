Simple Calculator
This project is a simple calculator implemented in JavaScript that allows users to perform basic arithmetic operations: addition, subtraction, multiplication, and division. The user is prompted to choose an operation and input two numbers, after which the result of the operation is displayed. The program can handle multiple calculations in a loop.

Features
Addition
Subtraction
Multiplication
Division (with error handling for division by zero)
Loop to perform multiple calculations
Usage
Clone the repository or copy the script to your local environment.
Open the HTML file containing the script in a web browser.
Follow the on-screen prompts to choose an operation and input the numbers.
The result of the calculation will be displayed in an alert.
The user is then asked if they want to perform another calculation.
Code Overview
Functions
addition(numberA, numberB): Returns the sum of numberA and numberB.
subtraction(numberA, numberB): Returns the difference between numberA and numberB.
multiply(numberA, numberB): Returns the product of numberA and numberB.
divide(numberA, numberB): Returns the quotient of numberA divided by numberB. Throws an error if numberB is 0.
Main Logic
The main logic of the script is enclosed in a do while loop that:

Prompts the user to choose an arithmetic operation.
Prompts the user to enter two numbers.
Calls the appropriate function based on the user's choice and displays the result.
Catches any errors (such as division by zero) and displays an error message.
Asks the user if they want to perform another calculation.

Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.