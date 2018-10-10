let Letter = require('./Letter');

let Word = class {
    constructor(str) {
        this.letters = [];
        for (let i = 0; i < str.length; i++) {
            this.letters = this.letters.concat(new Letter(str[i]));
        }
    }

    getLine() {
        let line = '';
        this.letters.forEach(x => {
            line += x.getVal() + ' '; 
        })

        // letters.reduce
        // join new array with join(' ')
        return line;
    }

    checkVal(guess) {
        let found = false;
        this.letters.forEach(x => {
            if (x.checkVal(guess))
                found = true;
        })

        return found;
    }

    getPlaceholder() {
        return this.letters[0].getPlaceholder();
    }
}

module.exports = Word;