function min(a,b,c) {
	let res = a
	if (res > b) {
		res = b
	}
	if (res > c) {
		res = c
	}
	return res
}
console.log( min(3,1,6))
console.log( min(0,1,-1))
