
let Letter = class {
    constructor(newLetter) {
        this.char = newLetter;
        this.guessed = false;
        this.placeholder = '-';

        if (this.char == ' ') 
            this.guessed = true;
    }

    getVal() {
        // if the letter has bene guessed, return the letter
        if (this.guessed)
            return this.char;
        
        // else return a placeholder
        return this.placeholder;
    }

    checkVal(guess) {
        if (guess.toLowerCase() === this.char.toLowerCase()) {
            this.guessed = true;
            return true;
        }
        return false;
    }

    getPlaceholder() {
        return this.placeholder;
    }


}

module.exports = Letter;