it('creates variables in parent scope', function(){
  var a, b;

  var list = [1, 2, 3, 4];
  var result = list.filter(function (x, y) {
    a = x * 2;
    b = y * y;

    return a - 5 > 0;
  });

  delete a;
  delete b;
});


it('creates variables in same scope', function(){
  var list = [1, 2, 3, 4];
  var result = list.filter(function (x, y) {
    var a = x * 2;
    var b = y * y;

    return a - 5 > 0;
  });
});
