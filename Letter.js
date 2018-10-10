
let placeholder = '_';

let Letter = class {
    constructor(newLetter) {
        this.char = newLetter;
        this.guessed = false;

        if (this.char == ' ') 
            this.guessed = true;
    }

    getVal() {
        // if the letter has bene guessed, return the letter
        if (this.guessed)
            return this.char;
        
        // else return a placeholder
        return placeholder;
    }

    checkVal(guess) {
        if (guess === this.char) {
            this.guessed = true;
            return true;
        }
        return false;
    }


}

module.exports = Letter;