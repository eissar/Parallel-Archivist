import getCssData from 'get-css-data';
import * as zip from "https://deno.land/x/zipjs@v2.6.23/index.js";
import {
  BlobReader,
  BlobWriter,
  TextReader,
  TextWriter,
  ZipReader,
  ZipWriter,
} from "https://deno.land/x/zipjs/index.js";  //remove unnecessesary imports///


(function() {
  
  //create hoverbox//
	document.body.append(Object.assign(document.createElement("div"), {
	    id: "hoverbox"
		}));
 	let hoverbox = document.getElementById("hoverbox");
  
///Set hoverbox styling///
  hoverbox.style.cssText = `
        position: absolute !important;
        pointerEvents: none !important;
        background: rgba(0, 235, 255, 0.5);
        transition: all 150ms ease;
        container: document.body;
				z-index: 9999999;
  `;
	hoverbox.style.pointerEvents="none";//MAY BE REDUNDANT//
///END SET STYLING///
  
		//create basic functions to call later
    const disableselect = (e) => {
        return false;
    };
    const disablelink = (e) => {
        return false;
    };
    const enableselect = (e) => {
        return true;
    };
  
  
    const exitfunction = (e) => {
            if (e.key === "Escape") {
		console.groupCollapsed("Parallel Archivist - Exiting selection mode...")
    window.removeEventListener("click", getElements);
		console.log("test")
    ///reenable selection///
    document.onselectstart = enableselect;
    document.onmousedown = enableselect;
    ///END reenable selection///
            //remove any styling..//
            document.body.style.cursor = "auto";
            hoverbox.style.display ="none";
		console.groupEnd();
    }};
  
    const calculateBox = (target) => {
    targetOffset = target.getBoundingClientRect();
            targetHeight = targetOffset.height;
            targetWidth = targetOffset.width;
            hoverbox.style.width = targetWidth+"px" ;
            hoverbox.style.height = targetHeight+"px" ;
            hoverbox.style.top = targetOffset.top + window.scrollY + "px" ;
            hoverbox.style.left = targetOffset.left + window.scrollX + "px" ;
    };
  
    const getElements = (e) => {
        e.stopPropagation();e.preventDefault();
            let x = event.clientX;
            let y = event.clientY;		
        elements = document.elementsFromPoint(x, y);
        console.log(elements[0]);
        calculateBox(elements[0]);
    };
  
    
		const zipperino = (element) => {
      checked=true
      let zip = new JSZip();
      //Check GUI for flags//
      //if $(CheckCSS).checked {zip.file()}//
				zip.file("PA_CSS-2022-09-06--UTC14-26.CSS", getCSS(element));
      //if $(CheckJSON).checked {zip.file()}//
      	
      	zip.file("PA_Json-2022-09-06--UTC14-26.JSON", saveJSON(element));
      //if $(CheckHTML).checked {zip.file()}//
				zip.file("PA_Html-2022-09-06--UTC14-26.HTML", saveHTML(element));
      
      zip.generateAsync({type:"blob"})
      .then(function(content) {
        saveAs(content, "example.zip")
      });
    };
    
(function() {
    document.body.style.cursor = "grab";
    //attach event listener to exit selection mode//
		window.addEventListener("keyup", exitFunction);

		window.addEventListener("click", (e) => {
			e.stopPropagation(); e.stopImmediatePropagation; e.preventDefault();
      if (e.altKey) {
          //DO: get datetimestring to pass for filenames//
        //save last selected ele if alt key is held//
        zipperino(selectedElement)
            return;
      	}
      let x = e.clientX; let y = e.clientY;
			elements = document.elementsFromPoint(x, y);

			window.selectedElement = elements[0];
			calculateBox(selectedElement);
			
}, true);
}());


}());
//END DOCUMENT//
