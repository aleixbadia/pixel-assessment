"use strict";
var R = require("ramda");
var data = [
    "red rum",
    "murder",
    "rope",
    "pore",
    "repo",
    "listen",
    "silent",
    "endeavour",
];
function checkAnagrams(data) {
    var wordOrganizer = R.pipe(R.replace(/\W+/g, ""), R.toLower, R.split(""), R.sortBy(R.identity), R.join(""));
    var findUniqAnagrams = R.pipe(R.map(wordOrganizer), R.uniq);
    var wordObjs = data.map(function (word) {
        return { origWord: word, organizedWord: wordOrganizer(word) };
    });
    var uniqAnagrams = findUniqAnagrams(data);
    return uniqAnagrams.map(function (anagram) {
        var groupOfWords = [];
        wordObjs.forEach(function (wordObj) {
            if (anagram === wordObj.organizedWord)
                groupOfWords.push(wordObj.origWord);
        });
        return groupOfWords;
    });
}
console.log(checkAnagrams(data));
