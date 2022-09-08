function saveURLS(queryOne,queryTwo) {
  
var arr = [], l = document.links;
var re = new RegExp("^https:\\/\\/({queryOne}|{queryTwo})$"); //FIX SYNTAX AND TEST//

for(var i=0; i<l.length; i++) {	
let lnk = l[i].href;
  if (re.test(lnk)) {
		arr.push(lnk)
  }
}
  console.log(arr)

};
