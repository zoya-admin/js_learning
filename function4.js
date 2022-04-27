function uppercaseZ( word ) {
	if ( word.includes("z") ){
		return word.replace("z","Z")
	}
	return word
}

console.log( uppercaseZ("Roman") )
console.log( uppercaseZ("Zina") )
console.log( uppercaseZ("Kuza") )

