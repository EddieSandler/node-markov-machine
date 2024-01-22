/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = {};
    let words = this.words;
    for (let i = 0; i < words.length - 1; i++) {
      const currentWord = words[i];
      const nextWord = words[i + 1];

      if(!chain[currentWord]){
        chain[currentWord] = [nextWord]
      } else {
        chain[currentWord].push(nextWord)

      }

    }

      return chain

  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}


let mm = new MarkovMachine("the cat in the hat");