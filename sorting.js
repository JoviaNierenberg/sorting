function bubbleSort(array, iterate) {
	iterate = iterate || true;
	array = array || [];
    /* your code here */
    if(array.length === 0) {
    	return array;
    } else if (iterate === true){
    	// for (var i = 0; i < array.length; i++) {
    	// 	if(array[i]<array[i+1]) {
    	// 		result.push(array[i]);
    	// 	} else {
    	// 		result.push(array[i+1]);
    	// 	}
    	// }

    	// step 1: test 2 elements
    	//var sorted = true;
    	//var element1 = array.shift();
    	//while(sorted === true)
    	for (var i = 0; i < array.length; i++) {
    		if(array[i]>array[i+1]) {
    			var temp1 = array[i];
    			array[i]=array[i+1];
    			array[i+1]=temp1;
    			iterate=true;
    		} else {
    			
    		}
    	}
    	bubbleSort(array,iterate);
    } else if (iterate === false) {
    	return array;
    }

    // if already in order
    // if (array[0] < array[1]) {
    // 	return array;
    // } else {
    // 	return array.reverse();
    // }



}