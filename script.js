// Solution to excercise 1 starts here

let char = "a";

if (typeof char === "string") {
    if (char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
        console.log("vowel")
    } else {
        console.log("Consonant")
    } else {
        console.log("Invalid character")
    }
}

// Solution to excercise 1 ends here

// Solution to excercise 2 starts here

let a = 12;
let b = 10;
let c = 3;

if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    if (a + b > c && a + c > b && b + c > a) {
        console.log("This is a possible triangle");
    }
    else {
        console.log("This is NOT a possible triangle");
    } else {
        console.log("invalid variables")
    }
}

// solution to excercise 2 ends here

// Solution to excercise 3 starts here

let points = 70;

switch (typeof points === 'number') {
    case (points >= 0 && points < 50):
        console.log('not enough points')
        break;
    case (points >= 50 && points < 60):
        console.log(6)
        break;
    case (points >= 60 && points < 70):
        console.log(7)
        break;
    case (points >= 70 && points < 80):
        console.log(8)
        break;
    case (points >= 80 && points < 90):
        console.log(9)
        break;
    case (points >= 90 && points < 100):
        console.log(10)
        break;
    default:
        console.log('invalid numbers')
}

// solution to excercise 3 ends here

// Solution to excercise 4 starts here

let a = 'n';

switch (typeof a === 'string') {
    case false;
        console.log('invalid characters');
        break;
    case true;
        switch (a) {
            case a = 'c'
        case a = 'C'
        case a = 'k'
        case a = 'K'
        console.log('circle');
                break;
            case a = 'p'
        case a = 'P'
        case a = 'm'
        case a = 'M'
        case a = 'n'
        case a = 'N'
        console.log('square')
                break;
            default:
                console.log('triangle')
        }
}


// solution to excercise 4 ends here


// solution to excercise 5 starts here

let a = 10;
let b = 2;
let operator = (/)

switch (typeof a === 'number' && typeof b === 'number') {
    case true:
        switch (operator) {
            case '+';
                console.log(a + b);
                break;
            case '-'
            console.log(a - b)
                break;
            case '*'
            console.log(a * b);
                break;
            case '/'
            switch (b === 0) {
                    case true:
                        console.log('devided by 0');
                        break;
                    case false:
                        console.log(a / b);
                }
                break;
            default:
                console.log('inavlid operator')
        }
        break;
    case false:
        console.log('invalid numbers')
}



// solution to excercise 5 ends here
