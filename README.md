# Pixel-assessment
## Anagrams
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once. Knowing this we can rearrange alphabetically all the words given and we will clearly find all the anagrams in our list.

In order to provide the result in the desired format, we need to double loop through two arrays:
- the unique anagrams list
- the whole list of words

I created an array of objects containing both the original word and the organized word to make sure that the function wordOrganizer was only called once per word, instead of calling it everytime we needed to compare a word with a unique anagram.

During this exercise I used Ramda for two reasons:
- It's easier to read when using functional programming to create functions such as wordOrganizer and findUniqAnagrams.
- It provides certain methods such as R.uniq that don't exist in vanilla JS that come in handy in situations like this.


## Rijks gallery
