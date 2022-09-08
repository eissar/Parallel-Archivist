(function () {
  
var arr = [], l = document.links;
var re = new RegExp("^https:\/\/(stackoverflow|github)");

for(var i=0; i<l.length; i++) {	
let lnk = l[i].href;
  if (re.test(lnk)) {
		console.log(lnk)
  }
}

}());