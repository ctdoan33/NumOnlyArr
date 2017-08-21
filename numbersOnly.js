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
    for (var i = 0; i < arr.length; i++) {
        while(typeof(arr[i]) != "number"){
            for (var x = i; x < arr.length-1; x++) {
                arr[x] = arr[x+1];
            }
            arr.pop()
        }
    }
    console.log(arr);
}