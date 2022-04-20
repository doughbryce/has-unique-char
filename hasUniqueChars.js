// Write your code below
function hasUniqueChars(word) {
    let arr1 = [];
    let arr2 = [];
    
    for (let i = 0; i < word.length; i++) {
        arr1.push(word[i].charCodeAt());
    }
    for (let j = 0; j < arr1.length; j++) {
        
        for (let t = j + 1; t < arr1.length; t++) {
            
            if (arr1[j] === arr1[t]) {
                arr2.push(2);
            } else {
                arr2.push(1);
            }
            
        }
        
    }
    
    if (arr2.includes(2)) {
        return false;
    } else {
        return true;
    }
}

console.log(hasUniqueChars(`broklyn`));