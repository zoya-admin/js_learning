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
document.writeln(  min(3,1,6) +"<br>" )
document.writeln( min(0,1,-1) +"<br>" )
