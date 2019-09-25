
function testForPalindrome(givenWord) {
    //Palindrome Testing    

    var rword = "";

    rword.charAt();

    rword.charCodeAt()

    rword.concat()

    rword.endsWith()   rword.startsWith()

    String.fromCharCode(114)

    rword.includes()

    rword.indexOf(), rword.lastIndexOf()

    rword.match(   )

    rword.repeat()

    rword.replace()

    rword.search()

    rword.slice()

    rword.split()

    rword.substr()

    rword.substring()

    rword.toLowerCase()
    
    rword.toUpperCase()

    rword.trim()



    //Reverse thee word
    for(let i = 1;i <= givenWord.length;i++) {        
        rword += givenWord[givenWord.length - i];
    }
    
    return rword === givenWord;
}

