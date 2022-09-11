
function listenForClicks() {


  function reportError(error) {
    console.error(`Could not beastify: ${error}`);
  }

  function parallelify(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "alertr",
      });
  }


  //
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("testbutton")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(parallelify)
        .catch(reportError);
    }}, 
  {
    passive: true,
    once: true
  }
  );




}
/*
collapseicon=document.getElementById("collapseicon")
collapseicon.addEventListener("click", function () {
  console.log('test'); 
}, false);
*/


browser.tabs.executeScript({file: "/content_scripts/parallelify.js"})
.then(listenForClicks)

