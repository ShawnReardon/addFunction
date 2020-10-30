arg1 = 9
arg2 = -10


def add(num1 = -9, num2 = -1):
    global arg1
    global arg2
    arg1 = num1
    arg2 = num2
    return num1 + num2

myNumber = 0



def runDemo():
    
    print("")
    myNumber = add(game.ask_for_number("Give a number for arg1: "), game.ask_for_number("Give a number for arg2: "))
    print("")
    game.show_long_text("Calling add() with two arguments \n arg 1 = " + arg1 + "\n" " arg 2 = " + arg2 + "\n ...", DialogLayout.BOTTOM)
    print("Calling add() with two arguments \n arg 1 = " + arg1 + "\n" " arg 2 = " + arg2 + "\n ...")
    #time.sleep(1)
    print("")
    print("This is myNumber: " + myNumber)
    game.show_long_text("This is myNumber: " + myNumber, DialogLayout.BOTTOM)
    print("")
    return myNumber

def shouldContinue(message = None):
    if message != None:
        game.show_long_text(message, DialogLayout.BOTTOM)
        print("")
    else:
        game.show_long_text("Press to continue...\n", DialogLayout.BOTTOM)

result = runDemo()



shouldContinue("Now try writing a function named myStudentFunction that returns a value equal to that of add() in the space provided. See hints in comments! If you have already done so, press enter to check your solution...")

# HINT 1: Use input() to prompt user for a value
# Example: input("Please give a number: ")

# HINT 2: Store the result of the prompt in a variable
# Example: number1 = input("Please give a number: ")

# HINT 3: return the value at the end
# Example: return aVariable + anotherVariable

# Bonus: Add parameters to the function and use those to store your values.
# Parameters behave like local variables inside a function. It will be setup similiar to Hint 2

# Put your funtion below this line! Look at unitTest below for the format of a function definition
# Be sure to name your function EXACTLY myStudentFunction() or it will always fail the test (Hint: remove -> pass)

def myStudentFunction():
    return 1



def unitTest(studentFunction, myNumberFunction):
    if (studentFunction == myNumberFunction):
        print(True)
        game.show_long_text("isCorrect: True! That is all for this demo. Feel free to poke around the files included to the left/modfy them and see what happens!", DialogLayout.BOTTOM)
        print("That is all for this demo. Feel free to poke around the files included to the left/modfy them and see what happens!")
    else:
        game.show_long_text("That isn't quite right, run the program again and see if you can spot what should happen", DialogLayout.BOTTOM)
        print("That isn't quite right, run the program again and see if you can spot what should happen")
        repeatMain()

unitTest(myStudentFunction(),result)

def repeatMain():
    global result
    result = runDemo()
    unitTest(myStudentFunction(),result)