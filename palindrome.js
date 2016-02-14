var resolvePalindrome = function(word){

    var originalWord = word,
        reversedWord = word.split("").reverse().join("");

    if(originalWord === reversedWord){
        console.log("This is palindrome!")
        return true;
    }else{
        console.log("This is not palindrome! :(")
        return false;
    }
};

resolvePalindrome(process.argv[2]);