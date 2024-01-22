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
    this.chain = {};
    let words = this.words;

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];

      if (i < words.length - 1) {
          const nextWord = words[i + 1];

          if (this.chain[currentWord]) {
              this.chain[currentWord].push(nextWord);
          } else {
              this.chain[currentWord] = [nextWord];
          }
      } else {
          // Handling the last word
          this.chain[currentWord] = null;
      }
  }

  return this.chain;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    Object.values(this.chain).filter(val=>{
      if(val !==null && val.length >1){
        let index = Math.floor(Math.random() * val.length);
        console.log(val[index])

      }
    })
    }
  }







mm = new MarkovMachine("the cat in the hat");
mm.makeText()