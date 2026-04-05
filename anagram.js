
// what is an anagram silent,listen = astronomer moon starer

function isAnagram (s1, s2) {

    const clean = s => s.toLowerCase().replace(/\s/g, '');
    s1 = clean(s1);
    s2 = clean(s2);

    if(s1.length != s2.length) return false;

    const freq = {};

    for (let ch of s1) freq[ch] = (freq[ch] ||0 ) + 1 ; 

    for (let ch of s2) {

        if(!freq[ch]) return false;
        freq[ch]--;
        
    }
        return true;
}

console.log(isAnagram("listen","silent"))

//use this to interview 