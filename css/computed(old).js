function computed(element) {
  let text ="";
  let styling=getComputedStyle(element)
	text += "{"
	  for(let key in styling) {
      text += "\"" + key + "\"+:\"" + (styling[key]) + "\",";
    };
  text += "}" 
  return text
}
