var sax = require("sax");
var htmlparser = require("htmlparser2");

var html1 = '<div>Hello, <textarea name="world">world</textarea>!</div>';
var html2 = "Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>";


it('parses with htmlparser2', function(done){
  var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
    },
    ontext: function(text){
    },
    onclosetag: function(tagname){
    },
    onend: done
  });

  parser.write(html2);
  parser.end();
});

it('parses with sax', function(done){
  var parser = sax.parser(false);

  parser.onerror = function (e) {
    throw e;
  };

  parser.ontext = function (t) {
  };

  parser.onopentag = function (node) {
  };

  parser.onend = done

  parser.write(html2).close();

});
