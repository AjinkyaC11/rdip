// For Palindrome  

const str=document.getElementById('pal');

const isPalindrome=(instr) => {
       instr=instr.replace(/\W/g, '');
       instr= instr.toLowercase();
       for (let i=0; i<instr ; i++) {
         if (instr[i] !== instr[instr.lenght-1-i]) {
               return false;
           }
      }
        return true;
   } 

console.log(isPalindrome(str));


// FOR ANAGRAM
let str1= document.getElementById('an1');
let str2= document.getElementById('an2');

function isAnagram(str1,str2) {
   if(str.length !== str2.length){
     return false;
     }
  var str1char=str1.split('').sort();
  var str2char=str2.split('').sort();

  str1char.forEach(function(_curchar){
      return false;
    }
    })
      return true;
    }

//Anagram completed





