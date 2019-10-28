var defCenter = [0,0];
var defSideLen = 1;



function doLSystem(){
	//does nothing yet
	//does nothing yet
	
}

function generateIteration(){
	var addDiv = document.createElement("div");
	addDiv.id = "gen"+generation;
	addDiv.append(nextGeneration());
	document.getElementById("string-container").append(addDiv);
	generation++;
	
}

function resetIteration(){
	  var bodyObj = document.getElementById("string-container");
	  while (bodyObj.firstChild) {
		bodyObj.removeChild(bodyObj.firstChild);
	  }
	generation=0;
	
}

function nextGeneration(){
	var word = ""
	for(var i = 0; i < generation; i++){
		word+= "AB";
	}
	return word
}

function drawFractalDemo(){
    pushTransform();
        transform.translate(-0.5,-0.4);
        filledTriangle(concatColor([colors[0],colors[1],colors[2]]), genTriangle(defCenter, defSideLen, [angles[0], angles[1], angles[2]]));
    popTransform();
}

