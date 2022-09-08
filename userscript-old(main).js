(function() {
  //create hoverbox//
	document.body.append(Object.assign(document.createElement("div"), {
		id: "hoverbox"
	})
);
 	let hoverbox = document.getElementById("hoverbox");
	//Set styling//
  hoverbox.style.cssText = `
        position: absolute !important;
        pointerEvents: none !important;
        background: rgba(0, 235, 255, 0.5);
        transition: all 150ms ease;
        container: document.body;
				z-index: 9999999;
  `;
	hoverbox.style.pointerEvents="none";
	///END SET STYLING///
		///END CREATE HOVERBOX///
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
    const logescape = (e) => {
        if (e.key === "Escape") {
            console.log("escape key pressed");
        }
    };
    const logclick = (e) => {
        console.log("right mouse clicked");
        ///disable selection///
        document.onselectstart = disableselect;
        document.onmousedown = disableselect;
        ///END disable selection///
				Event.preventDefault();
    };
    const exitfunction = (e) => {
            if (e.key === "Escape") {
    console.log("exiting selection mode...");
            window.removeEventListener("click", getElements);
    ///reenable selection///
    document.onselectstart = enableselect;
    document.onmousedown = enableselect;
    ///END reenable selection///
            //remove any styling..//
            document.body.style.cursor = "auto";
            hoverbox.style.display ="none";
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
    /*
    const saveJSON = () => {
      let a = document.createElement("a");
      a.href = window.URL.createObjectURL(new Blob([txt]), {type: "text/plain"});
      a.download = "PA-datetimestring.json";
      a.click();
    };
    */
    const saveJSON = (element) => {
        let text=JSON.stringify(element, [
            "baseURI",
            "id",
            "outerText",
            "style: CSS2Properties",
        ]);
      let a = document.createElement("a");
      a.href = window.URL.createObjectURL(new Blob([text]), {type: "text/plain"});
      a.download = "PA-datetimestring.json";
      a.click();
    };
    const saveHTML = (element) => {
      let text = element.outerHTML;
      let b = document.createElement("a");
      b.href = window.URL.createObjectURL(new Blob([text]), {type: "text/plain"});
      b.download = "PA-datetimestring.HTML";
      b.click();
    };
    const saveComputed = (element) => {
			let text ="";
			let styling=getComputedStyle(element)
			text += "{"
			for(let key in styling) {
        text += "\"" + key + "\"+:\"" + (styling[key]) + "\"" + ",";
      };
      text += "}"
      let c = document.createElement("a");
      c.href = window.URL.createObjectURL(new Blob([text]), {type: "text/plain"});
      c.download = "PA-Styling-datetimestring.json";
      c.click();
    };
    
(function() {
    document.body.style.cursor = "grab";
    //attach event listener to exit selection mode//
		window.addEventListener("keyup", exitfunction);

		window.addEventListener("click", (e) => {
			e.stopPropagation(); e.stopImmediatePropagation; e.preventDefault();
      if (e.altKey) {
        //DO: get datetimestring to pass for filenames//
        //save last selected ele if alt key is held//
        //saveJSON(selectedElement);
        //saveHTML(selectedElement);
        saveComputed(selectedElement);
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


