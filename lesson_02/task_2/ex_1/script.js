function Splice(array, index, count)
{
    let newArray = [];
    if( count > 0 )
    { count--}
    else
    { count++}
    for(let i = 0; i <array.length; i++)
    {
        if(!((i <= index + count && i >=  index) || (i <= index && i >=  index + count)))
        {
            newArray.push(array[i])
        }
    }
    return newArray;
}

let arr = [0,1,2,3,4,5,6,7,8];

console.log(Splice(arr, 4, 2)) ;
console.log(arr);
