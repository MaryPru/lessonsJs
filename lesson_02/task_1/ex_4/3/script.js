
    let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

    // arr[2](); // [Function (anonymous)]
    console.log(arr)