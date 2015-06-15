describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        // test the merging algorithm
        expect( mergeSort([1,3,5,7],[2,4,6,8]).toEqual( [1,2,3,4,5,6,7,8]));
    });
    it('handles empty arrays', function(){
    	expect( mergeSort([],[]).toEqual( []));
    })
    it('handles one empty array', function(){
    	expect( mergeSort([],[2,4]).toEqual( [2,4]))
    })
    it('handles arrays with odd  and even numbers of elements', function(){
    	expect( mergeSort([1,5,9],[2,4]).toEqual([1,2,4,5,9]))
    })
});