// Mirror multiple arrays: replace negative numbers in the arrays by their positives 

let arr1 = [ 1, 0, -1, -2, 6 ]
let arr2 = [ -2, 3, 2, -3, 1, 0, 5, -1 ]
let arr3 = [ -1, 0, 1 ]


mirrorArray( arr1 )
mirrorArray( arr2 )
mirrorArray( arr3 )

// procedure function which do smth but returns nothing
function mirrorArray( arr ) {
    for ( let i = 0; i < arr.length; i++ ) {
       if ( arr[i] < 0 ) {
           arr[i] = arr[i]*-1
       } 
    }
    console.log( arr )
}

// function which do smth and return result
function summ( n, m ) {
    return m + n
} 

// value returned by fucntion may by assignet into variabale 
let s = summ( 1, 20 )
console.log( s )
