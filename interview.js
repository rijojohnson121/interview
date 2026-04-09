function charFrequency(str) {

   const freq = {};

   for(let ch of str){
      freq[ch] = (freq[ch] || 0) + 1;

   }
   return freq;
}

console.log(charFrequency("automation"));