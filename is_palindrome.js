
function checkPalindrom() {

    let word = document.getElementById("my-text").value;
    
    document.getElementById("response").innerHTML = '<h3 id="greeting">' + word +' '+ isPalindrom( word.toLowerCase() ) + '!</h3>';
}

function isPalindrom( word ) {
	let i = 0
	let j = word.length - 1
	while ( i < j ) {
		if ( word.charAt(i) != word.charAt(j) ) {
			return "isn't palindrome"
		}
		i++
		j--
	}
	return "is palindrome"
}

//console.log( isPalindrom( "madam" ))
//console.log( isPalindrom( "boob" ))
//console.log( isPalindrom( "Zoia" ))
