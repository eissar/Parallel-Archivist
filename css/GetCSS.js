/* Using library from https://github.com/jhildenbiddle/get-css-data*/
function getCSS(element){
getCssData({
  rootElement: document,
  include: element,
  onComplete: function (cssText, cssArray, nodeArray) {
    //console.log (cssText); // 1
    //console.log (cssArray); // 2
    console.log (nodeArray); // 3
  }
});
};
