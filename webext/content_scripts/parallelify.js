(function() {

  if (window.hasRun) {
    return;
  }
  window.hasRun = true;
  
  function hide() {
    let element= document.getElementById("parallelArchivistHoverMenu");
    let collapseicon = document.getElementById("collapseicon");
    if (element.classList.contains("hover")) {
        element.classList.remove("hover");
        collapseicon.classList.remove("stroke")
    }
    else {
      element.classList.add("hover")
      collapseicon.classList.add("stroke")
    }
  };
  
  function alertr() {
    alert('test');
  }
  
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "alertr") {
      alertr();
    } 
  });
  
  
  })();
  