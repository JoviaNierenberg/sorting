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
    it('handles an multiple element array in order', function(){
        expect( bubbleSort([3,5,7,9,13,21]) ).toEqual( [3,5,7,9,13,21] );
    });
    it('handles an multiple element array out of order', function(){
        expect( bubbleSort([5,1,3,2,4]) ).toEqual( [1,2,3,4,5] );
    });
     
});