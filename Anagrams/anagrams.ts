const R = require("ramda");
let data = [
  "red rum",
  "murder",
  "rope",
  "pore",
  "repo",
  "listen",
  "silent",
  "endeavour",
];
​
interface wordObjInt {
  origWord: string;
  organizedWord: string;
}
​
function checkAnagrams(data: string[]) {
  const wordOrganizer: (word: string) => string = R.pipe(
    R.replace(/\W+/g, ""),
    R.toLower,
    R.split(""),
    R.sortBy(R.identity),
    R.join("")
  );
  const findUniqAnagrams: (wordsArr: string[]) => string[] = R.pipe(
      R.map(wordOrganizer),
      R.uniq
  )
  
  let wordObjs = data.map((word): wordObjInt => {
    return { origWord: word, organizedWord: wordOrganizer(word) };
  });
  const uniqAnagrams = findUniqAnagrams(data)
  return uniqAnagrams.map((anagram) => {
    let groupOfWords: string[] = [];
    wordObjs.forEach((wordObj: wordObjInt) => {
      if (anagram === wordObj.organizedWord) groupOfWords.push(wordObj.origWord);
    });
    return groupOfWords
  });
}
console.log(checkAnagrams(data));
