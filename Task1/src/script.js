let a = prompt("Enter a number: ");

let isPrime = true;

if (a > 1) {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${a} is a prime number`);
    } else {
        console.log(`${a} is a not prime number`);
    }
}
else{
    console.log(`${a} is neither a prime nor not prime number`);
}





function containsDuplicate(arr) {
    let i,j;
    for( i = 0; i < arr.length; i++) {
        for(j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
  }
  
  let array1 = [1, 2, 3, 1];
  console.log(containsDuplicate(array1));

  let array2 = [1, 2, 3, 4];
  console.log(containsDuplicate(array2));
  
  