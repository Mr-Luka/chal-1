function anagram(str1, str2) {
    const aCharMap = buildCharMap(str1);
    const bCharMap = buildCharMap(str2);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagram;

// anagram('hello', 'world');
// // { h: 1, e: 1, l: 2, o: 1 } { w: 1, o: 1, r: 1, l: 1, d: 1 }
// //   h     e     ll    o