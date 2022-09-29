// Created By: Adam De Rango
// Date: September 29 2022
// Purpose: to calculate the area of a trapezoid
// Displays "Let's calculate the area of a trapezoid"
game.splash("Let's calculate the area of a trapezoid")
// Creates variable "Base A" and asks for it numerical value (cm)
let Base_A = game.askForNumber("Enter a base length of the trapezoid (cm)")
// Creates variable "Base B" and asks for it numerical value (cm)
let Base_B = game.askForNumber("Enter the other base length of the trapezoid (cm)")
// Creates variable "height" and asks for it numerical value (cm)
let height = game.askForNumber("Enter height of trapezoid (cm)")
// Creates variable "A+B" and calculates it's numerical value by adding "Base A" and "Base B" together
let AB = Base_A + Base_B
// Creates variables "A+B/2" and calculates it's numerical value by Dividing variable "A+B" by 2
let AB2 = AB / 2
// Creates variables "Area of trapezoid" and calculates it's numerical value by multiplying variable "A+B/2" by heigth
let Area_of_trapezoid = AB2 * height
// Computer is thinking
game.splash("I think")
// Displays the final answer as "Final answer = area of trapezoid(variable) in (cm)
game.splash("Final answer =" + Area_of_trapezoid, "cm")
