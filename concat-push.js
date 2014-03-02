it('uses concat to merge two arrays', function(){
  var a = [1, 2, 3, 4];
  var b = [5, 6, 7, 8];
  a = a.concat(b);
});

it('uses push method to merge two arrays', function(){
  var a = [1, 2, 3, 4];
  var b = [5, 6, 7, 8];
  a.push.apply(a, b);
});
