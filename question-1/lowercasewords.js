function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input must be an array");
        } else {
            resolve(
                arr
                    .filter(item => typeof item === "string")
                    .map(word => word.toLowerCase())
            );
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(words => console.log(words))
    .catch(error => console.error(error));