const R = require("ramda");

let data = [
  "rope",
  "pore",
  "repo",
  "red rum",
  "murder",
  "listen",
  "silent",
  "endeavour",
];

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
  );

  interface wordObjInt {
    origWord: string;
    organizedWord: string;
  }

  let wordObjs = data.map((word: string): wordObjInt => {
    return { origWord: word, organizedWord: wordOrganizer(word) };
  });

  const uniqAnagrams: string[] = findUniqAnagrams(data);

  return uniqAnagrams.map((anagram: string): string[] => {
    let groupOfWords: string[] = [];
    wordObjs.forEach((wordObj: wordObjInt) => {
      if (anagram === wordObj.organizedWord)
        groupOfWords.push(wordObj.origWord);
    });
    return groupOfWords;
  });
}

console.log(checkAnagrams(data));
