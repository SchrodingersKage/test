function myFind(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) return arr[i]
    }
    return undefined;
}

function myFindIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i , arr)) return i
    }
    return undefined;
}

// ^^ Would you want to define true as a comparison. Or would truthy work?

