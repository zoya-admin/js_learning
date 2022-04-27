// Mirror multiple arrays: replace negative numbers in the arrays by their positives 

let arr1 = [ 1, 0, -1, -2, 6 ]
let arr2 = [ -2, 3, 2, -3, 1, 0, 5, -1 ]
let arr3 = [ -1, 0, 1 ]


for ( let i = 0; i < arr1.length; i++ ) {
   if ( arr1[i] < 0 ) {
        arr1[i] = arr1[i] * -1
   } 
}
console.log( arr1 )

for ( let i = 0; i < arr2.length; i++ ) {
   if ( arr2[i] < 0 ) {
        arr2[i] = arr2[i] * -1
   } 
}
console.log( arr2 )

for ( let i = 0; i < arr3.length; i++ ) {
   if ( arr3[i] < 0 ) {
        arr3[i] = arr3[i] * -1
   } 
}
console.log( arr3 )

console.log( "--------" )

mirrorArray( arr1 )
mirrorArray( arr2 )
mirrorArray( arr3 )

// procedure function which do smth but returns nothing
function mirrorArray( arr ) {
    for ( let i = 0; i < arr.length; i++ ) {
       if ( arr[i] < 0 ) {
           arr[i] = arr[i] * -1
       } 
    }
    console.log( arr )
}

