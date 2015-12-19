// transform @@...@@ into <blink>...</blink>
var marked = require( "marked" );

module.exports = function(str) {
  return marked(str).replace(/@@([^@]*)@@/gi, function(matched) {
		//"<blink>"+ "$1" + "</blink>"
    console.log("matched", matched)
    return "<blink>"+ matched.replace(/@@/gi, "") + "</blink>";
	}); 
}
