"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let i = 1; i <= 10; i++) {
    printOut(i.toString());
}

for (let i = 10; i >= 1; i--) {
    printOut(i.toString());
}

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let rightNumber = 5;

let guess = Math.floor(Math.random() * 60 + 1);

while (guess != rightNumber){
    guess = Math.floor(Math.random() * 60 + 1);
}

printOut(guess.toString());

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

 rightNumber = 500;

 guess = Math.floor(Math.random() * 1000000 + 1);

 const startTime = Date.now();

 let guessCounter = 0

while (guess != rightNumber){
    guess = Math.floor(Math.random() * 1000000 + 1);
    guessCounter++
}

const endTime = Date.now();

const time = endTime - startTime;

printOut("time taken to guess " + rightNumber.toString() + " is " + endTime.toString() + " milliseconds ");

printOut("total guesses made: " + guessCounter.toString());

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let numbers = 2;

while (numbers <= 200){
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(numbers); i++){
        
        if (numbers % i === 0){

            isPrime = false; 

            break;
        }
    }
    if (isPrime){

        printOut(numbers.toString());
    }
    numbers++;
}

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const rows = 7;
const columns = 9;

for (let r = 1; r <= rows; r++){

    let rowOutput = "";

    for (let k = 1; k <= columns; k++){
        rowOutput += `K${k}R${r}` 
    }
    printOut(rowOutput.trim());
}

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const getLetterGrade = (grade) => {
    if (grade >= 210) return 'A';
    if (grade >= 182) return 'B';
    if (grade >= 154) return 'C';
    if (grade >= 125) return 'D';
    if (grade >= 97) return 'E';
    return 'F';
};

const printGradesDescending = (grades) => {
    let printedGrades = '';
    let gradeCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

    for (let grade of grades) {
        gradeCounts[grade]++;
    }

    for (let letter of ['A', 'B', 'C', 'D', 'E', 'F']) {
        while (gradeCounts[letter] > 0) {
            printedGrades += letter + ' ';
            gradeCounts[letter]--;
        }
    }

    printOut(printedGrades.trim().toString());
};

let grades = '';
for (let i = 0; i < 5; i++) {
    const randomGrade = Math.floor(Math.random() * 236) + 1;
    const letterGrade = getLetterGrade(randomGrade);
    grades += letterGrade + ' ';
    printOut(`Student ${i + 1}: Grade = ${randomGrade}, Letter = ${letterGrade}`);
}

printOut("Grades in descending order:");
printGradesDescending(grades.trim().split(' '));
    


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const simulateDiceThrows = (condition) => {
    let throws = 0;
    let result;

    do {
        result = [0, 0, 0, 0, 0, 0].map(() => Math.floor(Math.random() * 6) + 1);
        throws++;

        switch (condition) {
            case 'fullStraight':
                if (new Set(result).size === 6 && result.sort().join('') === '123456') {
                    return throws;
                }
                break;

            case 'threePairs':
                const counts = {};
                result.forEach(num => counts[num] = (counts[num] || 0) + 1);
                if (Object.values(counts).filter(count => count === 2).length === 3) {
                    return throws;
                }
                break;

            case 'tower':
                const kindCounts = {};
                result.forEach(num => kindCounts[num] = (kindCounts[num] || 0) + 1);
                const kindValues = Object.values(kindCounts);
                if (kindValues.includes(2) && kindValues.includes(4)) {
                    return throws;
                }
                break;

            case 'yahtzee':
                if (new Set(result).size === 1) {
                    return throws;
                }
                break;

            default:
                throw new Error('Unknown condition');
        }
    } while (true);
};

printOut(`Throws to get a full straight: ${simulateDiceThrows('fullStraight')}`);
printOut(`Throws to get three pairs: ${simulateDiceThrows('threePairs')}`);
printOut(`Throws to get a tower (2 of a kind and 4 of a kind): ${simulateDiceThrows('tower')}`);
printOut(`Throws to get Yahtzee (all the same): ${simulateDiceThrows('yahtzee')}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
