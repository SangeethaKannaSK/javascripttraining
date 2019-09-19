
function testForPalindrome(givenWord) {
    //Palindrome Testing    

    var rword = "";

    //Reverse thee word
    for(let i = 1;i <= givenWord.length;i++) {        
        rword += givenWord[givenWord.length - i];
    }
    
    return rword === givenWord;
}