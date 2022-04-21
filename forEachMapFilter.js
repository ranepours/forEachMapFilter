//FOREACH
function doubleValues(arr){
    let arrAgain = [];
    arr.forEach(function(num){
        arrAgain.push(num * 2);
    })
    return arrAgain;
}

function onlyEvenValues(arr){
    let arrAgain = [];
    arr.forEach(function(num){
        if(num % 2 === 0){
            arrAgain.push(num);
        }
    })
    return arrAgain;
}

function firstAndLast(arr){
    let arrAgain = [];
    arr.forEach(function(str){
        arrAgain.push(str[0] + str.charAt(str.length - 1));
    })
    return arrAgain;
}

function KeyValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    })
    return arr;
}
const test = KeyValue([
    {what: 'yes'},
    {what: 'no'},
    {what: 'maybe'}
], 'is', 'up');

function vowelCount(str){
    const vowels = "aeiou";
    let vowelCounter = {};
    let letters = str.split("");

    letters.forEach(function(letter){
        let anyCase = letter.toLowerCase();
        if(vowels.indexOf(anyCase) !== -1){
            if(vowelCounter[anyCase]){
                vowelCounter[anyCase]++;
            } else {
            vowelCounter[anyCase] = 1;
            }
        }
    }); return vowelCounter;
}

//MAP
function doubleValuesMap(arr){
    let arrValues = arr.map(function(num){
        return num * 2;
    });
    return arrValues;
}

function valTimesIndex(arr){
    let arrValues = arr.map(function(num, i){
        return num * i;
    });
    return arrValues;
}

function extractKey(arr, key){
    return arr.map(function(input){
        return input[key];
    })
}

function extractFullName(arr){
    return arr.map(function(input){
        return `${input.first} ${input.last}`;
    })
}

//FILTER
function filterByValue(arr, key){
    return arr.filter(function(input){
        if(input[key] !== undefined){
            return input[key];
        }
    })
}

function find(arr, val){
    return arr.filter(function(input, i){
        if(input === val){
            return [i];
        }
    }) 
    [0];
} //this one took foreverrrrrrrr

function findInObj(arr, key, val){
    return arr.filter(function(input){
        return input[key] === val;
    })
    [0];
}

function removeVowels(str){
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(function(input){
        return vowels.indexOf(input) === -1;
    }).join('');
}

function doubleOddNumbers(arr){
    let odds =  arr.filter(function(num){
        return num % 2 !== 0;
    })
    return odds.map(function(num){
        return num * 2;
    }) 
}