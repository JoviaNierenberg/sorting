describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
   	it('handles an 2 element array out of order', function(){
        expect( bubbleSort([5,3]) ).toEqual( [3,5] );
    });
   	it('handles an 2 element array in order', function(){
        expect( bubbleSort([3,5]) ).toEqual( [3,5] );
    });
     
});