describe('Bubble Sort', function(){
  // beforeAll(function () {
  //   spyOn(window, 'swap').and.callThrough();
  // });

  it('takes 3 swaps to sort array', function () {
    window.bubbleSort([2,3,4,1]);
    expect(window.swap.calls.count()).toEqual(3);
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect( bubbleSort([1])).toEqual([1]);
  });

  it('handles a multiple items array', function(){
    expect( bubbleSort([2,1,4,5,3]).toEqual([1,2,3,4,5]));
  });
});

