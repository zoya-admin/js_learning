function giveFlower( name ) {
	
	if ( "AOEUI".includes( name.charAt(0) ) ) {
		return name + " gets chamomile"
	} else {
		return name + " gets rose"
	}
 
    // short if-esle notation
    // return ( "AOEUI".includes( name.charAt(0) ) ) ? name + " gets chamomile" : name + " gets rose"

}

document.writeln(  giveFlower( "Alex" ) +"<br>" )
document.writeln(  giveFlower( "Petr" ) +"<br>" )
document.writeln(  giveFlower( "Andy" ) +"<br>" )
document.writeln(  giveFlower( "Volodya" ) +"<br>" )
