function resize() {
	newh = getWindowHeight() - 100;
	//alert(newh);
	if (document.getElementById('sidebar').offsetHeight < newh && document.getElementById('content').offsetHeight < newh ) {			
		document.getElementById('wrapper').style.height = newh+"px";
	//	document.getElementById('content').style.height = 200+"px";			
	}
}
function getWindowHeight() {
  var windowHeight = 0;
	
  if (typeof(window.innerHeight) == 'number')
    windowHeight = window.innerHeight;
	
  else {
		
    if (document.documentElement && document.documentElement.clientHeight)
      windowHeight = document.documentElement.clientHeight;
		
    else {
      if (document.body && document.body.clientHeight)
        windowHeight = document.body.clientHeight; }; };
				
  return windowHeight;
};	

function load() {
	resize();
	if (document.getElementById('sidebar').offsetHeight > document.getElementById('content').offsetHeight) {
		document.getElementById('content').style.height = document.getElementById('sidebar').offsetHeight-12+"px";
	}
	else { 
		document.getElementById('sidebar').style.height = document.getElementById('content').offsetHeight-12+"px";	
	}
}

