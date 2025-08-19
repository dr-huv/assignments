/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



function isAnagram(str1, str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    if(str1.length!=str2.length)
        return false;
    const map1 = new Map();
    
    for(let i = 0;i<str1.length;i++){
        let char = str1[i];
        if(map1.has(char)){
            let curCount = map1.get(char)
            map1.set(char,curCount+1);
        } else {
            map1.set(char,1);
        }
    }

    for(let i=0; i<str2.length;i++){
        let char = str2[i];
        if(map1.has(char)){
            let curCount = map1.get(char)
            map1.set(char,curCount-1);
        } else {
            return false;
        }
    }

    for(const [key, value] of map1){
        if(value!=0){
            return false;
        }
    }

    return true;

}

// console.log(isAnagram('hello','ollhe'))

module.exports = isAnagram;
