var resolvePalindrome = function(word){

    var originalWord = word.toUpperCase().replace(/\W/g, ''),
        reversedWord = word.split("").reverse().join("").toUpperCase().replace(/\W/g, '');

    if(originalWord === reversedWord){
        console.log("This is palindrome! :)")
        return true;
    }else{
        console.log("This is not palindrome! :(")
        return false;
    }
};

resolvePalindrome(process.argv[2]);