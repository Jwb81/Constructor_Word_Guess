let inquirer = require('inquirer');
let chalk = require('chalk');

let Word = require('./Word')

// let args = process.argv.slice(2).join(' ');

// console.log(args);

let wordList = ['hello world']
let word = new Word(wordList[0]);
let guessedChars = [];
let startingGuesses = 10;

let prompt = (guessesLeft) => {
    if (!guessesLeft) {
        // throw game ending message
        return;
    }
    
    // put a spacer on the command line 
    console.log('\n****************************\n');

    // show how many guesses are remaining
    console.log(`Guesses remaining: ${guessesLeft}`)

    // show the letters to the user
    console.log(word.getLine());

    // get the next letter from the user
    inquirer.prompt([{
            type: 'input',
            message: `${chalk.blue('Next guess: ')}`,
            name: 'guess'
        }

    ]).then(res => {
        let currentGuess = res.guess;

        // validate that only one character was entered
        if (currentGuess.length != 1) {
            console.log('You must enter only one character...')
            return prompt(guessesLeft);
        }

        // check if the letter was already guessed
        if (guessedChars.indexOf(currentGuess) != -1) {
            console.log('You have already guessed that letter...');
            return prompt(guessesLeft);
        }

        // add the letter to the array of guessed characters
        guessedChars = guessedChars.concat(currentGuess);

        // check the letter guessed on each letter in the word
        let letterFound = word.checkVal(currentGuess);
        if (letterFound)
            console.log(`${chalk.green('CORRECT!')}`);
        else {
            console.log(`${chalk.red('INCORRECT...')}`);
            guessesLeft--;
        }


        // call the Word method to show any matching letters
        let line = word.getLine();

        // check if the word is finished
        if (line.indexOf(word.getPlaceholder()) == -1) {
            // the word has been guessed
            console.log(`${chalk.rgb(0,255,100).bold(`CONGRATULATIONS! YOU GOT IT!`)}`)
            
            // start a new word

            // exit the program
            return; 
        }

        // call prompt() again
        return prompt(guessesLeft);

    })
}


// start the program
prompt(startingGuesses);