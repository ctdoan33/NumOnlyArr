function numbersOnlynew(arr){ //for new array
    var newArray = [];
    for (var i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
    return newArray;
}
function numbersOnly(arr){ //for removal from given array
    var newArray = [];
    for (var i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            newArray.push(arr[i]);
        }
    }
    arr = newArray;
    console.log(arr);
    return arr; //still have to return array as it's a function call and is local
}