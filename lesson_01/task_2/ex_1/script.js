function Sum(a,b) {
    return (a + b);
}

a=Sum(2,3);
console.log(a)

function difference(a,b) {
    return (a - b);
}

a=difference(2,3);
console.log(a)

function multiplication(a,b) {
    return (a * b);
}

a=multiplication(2,3);
console.log(a)

function division(a,b) {
  if (b!==0){
      return (a/b)
  }
  return ('делить на 0 нельзя')
}

a=division(2,2);
console.log(a)