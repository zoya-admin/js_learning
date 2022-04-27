// For each i from 1 to 10 print i*i

let students = ["Roma", "Zoia", "Kuzia", "Dima", "Rusi", "Mama", "Papa"]

console.log( students[2] )

console.log( students.length )

console.log( "-----" )
students[2] = "KuZ"

//for (let i = 0; i < students.length; i++) {
//    if ( students[i].includes("Z") ) {
//        console.log( students[i] )
//    }
//}

for ( let student of students ) {
   if ( student.includes("Z") ) {
       console.log( student.concat("a") )
   } else {
       console.log( student )
   }
}


