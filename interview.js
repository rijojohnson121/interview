/*function charFrequency(str) {

   const freq = {};

   for(let ch of str) {
      freq[ch] = (freq[ch] || 0 ) + 1
   }
   return freq;
}
const result = charFrequency("automation");
console.log(result);*/


// charfrq 
//go through the string for each character to do it 

function charFrequency(str) {
   const freq = {};
    for (let ch of str) {
      freq[ch] = (freq[ch] || 0 ) + 1;
   }
   return freq;      
    }

const result = charFrequency("rijo johnson");
console.log(result);