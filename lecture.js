//CALLBACKS
//diff ways to write funcs
const whisper = function(){
    console.log('pssst...');
}
function holler(){
    console.log("HEY YOU!!");
}
//example
function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y; 
}
function multiply(x,y){
    return x * y; 
}
function divide(x,y){
    return x / y; 
}
function power(x,y){
    return x ** y;
}
//can store funcs in array
const mathFuncs = [add, subtract, multiply, divide, power];
//functions as argument
setTimeout(whisper, 4000);
//how do we do this ourselves? i'll show ya
function doMath(a,b,mathFunc){
    return mathFunc(a,b);
}
//can also pass in anonymous func
//needs to have two params because our og funcs do
doMath(3,4,function(a,b){
     console.log(a ** b); //a to the power of b
});
//what we learn? we can pass in a named func that already exists OR define an inline anon func
//create a func that calls all math funcs on two numbers passed in as argument using out mathFuncs array :))
function doAllMath(a,b,mathFuncs){
    for(let func of mathFuncs){
        console.log(func(a,b))
    }
} //don't forget to refresh LMFAO
//we can also do something like this
addEventListener('click', function(){
    console.log('yeah');
})

//FOREACH
const colors = [ 'yellow', 'red', 'black', 'blue', 'brown' ];
//to use forEach u pass in a func within parenths - inline anon func or an already defined func works as well ;)
//colors.forEach(function(val) {
  //  console.log(val.toUpperCase);
//})
//we can also do this and get the same result:
function yell(val, i){
    const caps = console.log(val.toUpperCase());
    console.log(`At index ${i}, ${caps}`);
}
colors.forEach(yell);
//common: param 1 = values, param 2 = index; not as common: param 3 = entire array
//eg with numbers - using forEach to sum values
const prices =  [30.99, 65, 32.46, 11.72];
let total =  0;
prices.forEach(function(price){
    total+=price;
})
console.log(total); //but yanno... we can also just a regular ol forOf loop too but i'm p sure i fucked this one up so ignore that
//const prices =  [30.99, 65, 32.46, 11.72];
//let total = 0;
//for (let price of prices){
//total += price;
//}
//console.log(total);
//exercise
function myForEach(arr, CBF){
    for(let i = 0; i < arr.length; i++){
        CBF(arr[i], i, arr);
    }
}

myForEach(colors, function(color){
    console.log(color.toUpperCase());
}); //she works, wooooooooooooooooooooooooo!
//MAP
const numbers = [21, 36, 9, 7];
//if we call numbers.map and pass in a CBF(callback function) argument 1 = individual value,
const negatives = numbers.map(function(num){
    return num * -1;
})
const doubles = numbers.map(function(num){
    console.log(num * 2) ;
})
//func is executed but its trying to build an array, this entire func will return an undefined array - no need to use map if we just want to console.log - yanno? just use forEach then
//another example
const todos = [
    {
        id: 1,
        text: 'watch lectures',
        priority: 'high'
    },
    {
        id: 2,
        text: 'breathe',
        priority: 'low',
    },
    {
        id: 3,
        text: 'take a break',
        priority: 'medium',
    },
    {
        id: 4,
        text: 'caffeinate',
        priority: 'very high',
    }
]
const todoText = todos.map(function(todo){
    return todo.text;
})
//lets say we want to extract each url, we can use map for that :)
const links = document.querySelectorAll('a');
//this turns the above code into an array we can use instead of a nodeList (which we can't do much with)
const linksArray = Array.from(links); //pass in an iterable
const urls = linksArray.map(function(a){
    return a.href;
})
//writing map on our own
//remember our callback should pass 3 diff arguments every single time even if we're only using ONE so we can accurately recreate map
function myMap(arr, cbf){
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++){
        const val = cbf(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
}
//lets call our todo func from earlier
const priorityLevel = myMap(todos,function(todo){
    return todo.priority;
})
const repeatedLetters = myMap(['a','b','c','d', 'e'], function(str, idx){
//map array so that each string is repeated idx-times
    return str.repeat(idx);
})
//remember we're returning a COPY not modifying the original array

//FILTER
//create new array and we can filter based off of a certain condition
const palabras = [
    'cabron',
    'toalla',
    'novia',
    'guey',
    'guay',
    'juzgar',
    'libertad',
    'susurra',
    'ensordecedor',
    'chasquido',
    'pssst',
    'tsktsk',
    'hmmmm'
];
//lets filter out our shorter words
const palabrasCortas = palabras.filter(function(palabra){
    return palabra.length <= 5;
    //remember the whole if(word.length blah)blahblah, yeah we dont have to do that here. k pedo!
})
//words that start with g or c
const palabrasConGC = palabras.filter(function(p){
    return p[0] === 'g' || p[0] === 'c'; //words at index 0 triple equals g or c - checks first letter for a match of G or C
})
//new array using words that contain no vowels - nothing will show up but just follow along
//we need a way of verifying whether something IS or is NOT a vowel
const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1;
}
//lets make another function to check if a vowel is present
//iterate over each letter in word to check against isVowel
const containsVowel = function(palabra){
    for(let char of palabra){
        if (isVowel(char)) return true; //this means the entire word contains atleast one vowel
    }
    return false; 
}
//now we can use filter
const vowelTrue = palabras.filter(containsVowel);
const noVowels = palabras.filter(function(palabra){
    return !containsVowel(palabra);
})

//lets select all checked boxes ;)
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
//use filter to create array of only checked checkboxes
const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
})
//but we want to know how many items are done and WHAT was done as well
const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})
//this returns a new array from checked items where parent is accessed, and we return the innerText from those parents - woot
//can also define a func and chain some chiz together
function extract(){   
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
   return Array.from(allCheckboxes).filter(function(box){
    return box.checked; 
    }).map(function(checkbox){
    return checkbox.parentElement.innerText;
})} //kinda confusing to look at imo but still pretty damn rad
//writing filter
function myFilter(arr, callback){
    const filtered = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filtered.push(arr[i])
        } 
    };
    return filtered;
}