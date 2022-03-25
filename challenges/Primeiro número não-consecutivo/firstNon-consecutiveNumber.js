function firstNonConsecutive(arr) {
    let previous = arr[0];
    let first;
    for (let i = 1; i < arr.length; i++) {
        if ((previous + 1) != arr[i]) {
            first = arr[i]
            break;
        }
        previous++;
    }
    return first !== undefined ? first : null;
}