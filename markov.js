
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
    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chains.has(word)) chains.get(word).push(nextWord);
      else chains.set(word, [nextWord]);
    }

    this.chains = chains;
  }


  /** Pick random choice from array */

  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // pick a random key to begin
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys);
    let out = [];

    // produce markov chain until reaching termination word
    while (out.length < numWords && key !== null) {
      out.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }

    return out.join(" ");
  }
}


module.exports = {
  MarkovMachine,
};// /** Textual markov chain generator */


// class MarkovMachine {

//   /** build markov machine; read in text.*/

//   constructor(text) {
//     let words = text.split(/[ \r\n]+/);
//     this.words = words.filter(c => c !== "");
//     this.makeChains();
//   }

//   /** set markov chains:
//    *
//    *  for text of "the cat in the hat", chains will be
//    *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

//   makeChains() {
//     // TODO
//     this.chain = {};
//     let words = this.words;

//     for (let i = 0; i < words.length; i++) {
//       const currentWord = words[i];

//       if (i < words.length - 1) {
//           const nextWord = words[i + 1];

//           if (this.chain[currentWord]) {
//               this.chain[currentWord].push(nextWord);
//           } else {
//               this.chain[currentWord] = [nextWord];
//           }
//       } else {
//           // Handling the last word
//           this.chain[currentWord] = null;
//       }
//   }

//   return this.chain;
//   }


//   /** return random text from chains */

//   makeText(numWords = 100) {
//     // TODO

//     let keys= Object.keys(this.chain)

//     Object.values(this.chain).filter(val=>{
//       if(val !==null && val.length >1){
//         let index = Math.floor(Math.random() * val.length);
//         for (let k=0;k<keys.length;k++){
//           console.log(keys[k],val[index])
//         }
//       }

//     })
//     }


//   }
//   let mm = new MarkovMachine("the cat in the hat");
//   mm.makeText();



