function occurenceCounter(arr){
    const result = {};

    for(let i=0;i<arr.length;i++){
        if(result[arr[i]]){
            result[arr[i]]+=1;
        }
        else{
            result[arr[i]]=1;
        }
    }

    return result;
}

let array = ['a','b','cd','a','a','cd','e'];
let obj = occurenceCounter(array);
console.log(obj);