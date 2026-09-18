const prompt = require('prompt-sync')();
let v = "aeiou";
let mot = prompt ("entrer votre mot:")
let count = 0;
for (let i = 0; i < mot.length; i++) {
    for (let j = 0; j < v.length; j++) {
        if (mot[i] === v[j]) {
            count++;
        }
    }
}
console.log(count);