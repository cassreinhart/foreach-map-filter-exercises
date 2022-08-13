function doubleValues(arr){
    newArr = [];
    arr.forEach(function(value) {
        newArr.push(value * 2);
    }); return newArr;
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(value) {
        if (value % 2 === 0) {
            newArr.push(value);
        }
    }); return newArr;
}

function showFirstAndLast(arr){
    let firstLastArr = [];
    arr.forEach(function(value){
        firstLastArr.push(value[0] + value[value.length-1]);
    }); return firstLastArr;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(obj){
    obj[key] = value;//why does bracket notation work here but not dot notation?
   }); return arr;
}

function vowelCount(str){
   let result = {};
   let vowels = 'aeiou';
   let subStrArr = str.split('');
   subStrArr.forEach(function(char) {
    let lowerChar = char.toLowerCase();
    if (vowels.includes(lowerChar)) {
        if (result[lowerChar] === undefined) {
            result[lowerChar] = 1;
        } else {
            result[lowerChar]++;
        }
    }
   }); return result;
}

function doubleValuesWithMap(arr) {
    return arr.map(function(value) {
        return value * 2;
   });
}

function valTimesIndex(arr){
    return arr.map(function(value, index) {
        return value * index;
    })
}

function extractKey(arr, key){
    return arr.map(function(obj) {
        return obj.key; //will it pass w/bracket notation?
    });
}

function extractFullName(arr){
    return arr.map(function(obj) {
        return obj.first +  " " + obj.last;
    });
}

function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return obj.key !== undefined;
    });
}

function find(arr, searchValue) {
    arr.filter(function(num){
       return num === searchValue;
    }); 
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(obj){
       return obj[key] === searchValue;
    });
}

function removeVowels(str) {
    let vowels = 'aeiou';
    let lowerCaseStr = str.toLowerCase();
    let strAsArr = lowerCaseStr.split('');
    return strAsArr.filter(function(char){
        return vowels.indexOf(char) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
    return arr
    .filter(function(num) {
        return num % 2 !== 0;
    })
    .map(function(value){
        return value * 2;
    });
}
