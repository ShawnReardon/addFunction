let arg1 = 9
let arg2 = -10
function add(num1: number = -9, num2: number = -1): number {
    
    
    arg1 = num1
    arg2 = num2
    return num1 + num2
}

let myNumber = 0
function runDemo(): number {
    console.log("")
    let myNumber = add(game.askForNumber("Give a number for arg1: "), game.askForNumber("Give a number for arg2: "))
    console.log("")
    game.showLongText(`Calling add() with two arguments 
 arg 1 = ` + arg1 + "\n arg 2 = " + arg2 + "\n ...", DialogLayout.Bottom)
    console.log(`Calling add() with two arguments 
 arg 1 = ` + arg1 + "\n arg 2 = " + arg2 + "\n ...")
    // time.sleep(1)
    console.log("")
    console.log("This is myNumber: " + myNumber)
    game.showLongText("This is myNumber: " + myNumber, DialogLayout.Bottom)
    console.log("")
    return myNumber
}

function shouldContinue(message: string = null) {
    if (message != null) {
        game.showLongText(message, DialogLayout.Bottom)
        console.log("")
    } else {
        game.showLongText(`Press to continue...
`, DialogLayout.Bottom)
    }
    
}

let result = runDemo()
shouldContinue("Now try writing a function named myStudentFunction that returns a value equal to that of add() in the space provided. See hints in comments! If you have already done so, press enter to check your solution...")
//  HINT 1: Use input() to prompt user for a value
//  Example: input("Please give a number: ")
//  HINT 2: Store the result of the prompt in a variable
//  Example: number1 = input("Please give a number: ")
//  HINT 3: return the value at the end
//  Example: return aVariable + anotherVariable
//  Bonus: Add parameters to the function and use those to store your values.
//  Parameters behave like local variables inside a function. It will be setup similiar to Hint 2
//  Put your funtion below this line! Look at unitTest below for the format of a function definition
//  Be sure to name your function EXACTLY myStudentFunction() or it will always fail the test (Hint: remove -> pass)
function myStudentFunction() {
    
}

function unitTest(studentFunction: any, myNumberFunction: number) {
    if (studentFunction == myNumberFunction) {
        console.log(true)
        game.showLongText("isCorrect: True! That is all for this demo. Feel free to poke around the files included to the left/modfy them and see what happens!", DialogLayout.Bottom)
        console.log("That is all for this demo. Feel free to poke around the files included to the left/modfy them and see what happens!")
        if (game.askForNumber("If you would like to run again, Enter 1 ") == 1) {
            repeatMain()
        }
        
    } else {
        game.showLongText("That isn't quite right, run the program again and see if you can spot what should happen", DialogLayout.Bottom)
        console.log("That isn't quite right, run the program again and see if you can spot what should happen")
        repeatMain()
    }
    
}

unitTest(myStudentFunction(), result)
function repeatMain() {
    
    result = runDemo()
    unitTest(myStudentFunction(), result)
}

