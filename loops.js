it('iterates with function loop', function(){
  var list = [1, 2, 3, 4, 5, 6, 7];
  var acc = 0;

  (function next (i) {
    if (i == list.length) return;

    acc += list[i];

    next(i+1);
  }(0));
});


it('iterates with for loop', function(){
  var list = [1, 2, 3, 4, 5, 6, 7];
  var acc = 0;

  for (var i = 0, len = list.length; i < len; i++) {
    acc += list[i];
  }
});

it('iterates with while loop', function(){
  var list = [1, 2, 3, 4, 5, 6, 7];
  var acc = 0;

  var i = list.length;
  while (i--) acc += list[i];
});
