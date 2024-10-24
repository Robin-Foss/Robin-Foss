"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
const wakeUpTime = 7
if (wakeUpTime <= 7) {
  printOut("I can take the bus to school.");
}  else if (wakeUpTime <= 8){
  printOut ("I can to take the train to school");
}  else {
  printOut ("I have to take the car to school");
}
 

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const number = Math.round(-1)

if (number < 0){
  printOut (number.toString() +"is negative");
} else if (number > 0){
  printOut (number.toString() + "is positive");
} else{
  printOut (number.toString() + "is zero");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1 )) + min;
}

let pictureMP = getRandomInt(1, 8);
printOut ("The picture is" + (pictureMP.toString()) + "MP");

if (pictureMP >= 6){
  printOut('Image is too large')
} else if (pictureMP < 4){
  printOut ("the picture is too small")
} else {
  printOut ("Thank You")
}

printOut(newLine);



printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "Mai",
 "Jun", "Juli", "August", "September", "October", "November", "December"];
 const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const noOfMonth = monthList.length;

  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  const monthIndex = monthList.indexOf(monthName);
  const days = daysInMonth[monthIndex];

  printOut(monthName.toString())

  if (monthName.includes("r")){
  printOut ("You must take vitamin D")
  }else{
     ("You do not need to take vitamin D")
  }


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("The month of " + monthName.toString() +  "has " + days.toString() + " days.");

console.log(monthName)

if (monthName === "Mars" || monthName === "May") {
  printOut("The gallery is closed");
} else if (monthIndex === 3) {
  printOut("There is a temporary premises in the building next door");
} else {
  printOut("The art gallery is open");
} 

printOut(newLine);
