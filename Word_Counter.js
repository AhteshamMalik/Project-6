#! /usr/bin/env node
// Word Count Program 
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    message: "Enter your sentence to count the words :",
    type: "input",
});
let word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`Your sentence words are : ${word.length}`);
