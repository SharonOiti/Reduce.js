function extractValue(arr, key) {
    return arr.map(function(obj) {
        return obj[key];
    });
}

function vowelCount(str) {
    const vowels = 'aeiou';
    const result = {};

    // Convert the string to lowercase to make it case-insensitive
    const lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    return result;
}

function addKeyAndValue(arr, key, value) {
    return arr.map(function(obj) {
        obj[key] = value;
        return obj;
    });
}

function partition(arr, callback) {
    const trueArray = [];
    const falseArray = [];

    arr.forEach(function(element) {
        if (callback(element)) {
            trueArray.push(element);
        } else {
            falseArray.push(element);
        }
    });

    return [trueArray, falseArray];
}
