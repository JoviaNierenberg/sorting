function bubbleSort(array) {
    if(array.length === 0) {
        return array;
    } else {
        var sorted = true;
        for (var i = 0; i < array.length; i++) {
            if(array[i]>array[i+1]) {
                var temp1 = array[i];
                array[i]=array[i+1];
                array[i+1]=temp1;
                sorted = false;
            }
        }
        if (sorted === false){
            bubbleSort(array);
        }
    }
    return array;
}