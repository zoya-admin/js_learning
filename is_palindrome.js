
function isPalindrom( word ) {

	let i = 0
	let j = word.length - 1

	while ( i < j ) {
		if ( word.charAt(i) != word.charAt(j) ) {
			return false
		}
		i++
		j--
	}

	return true
}

console.log( isPalindrom( "madam" ))
console.log( isPalindrom( "boob" ))
console.log( isPalindrom( "Zoia" ))
