var defCenter = [0,0];
var defSideLen = 1;
var word = []



function doLSystem(){
	word = [ABLsystem.axiom];
	generateIteration();
	
}

function generateIteration(){
	var addDiv = document.createElement("div");
	addDiv.id = "gen"+generation;
	if(generation == 0){
		addDiv.append(ABLsystem.axiom);
		document.getElementById("string-container").append(addDiv);
		generation++;
	}
	else{
		word = nextGeneration();
		addDiv.append(word);
		document.getElementById("string-container").append(addDiv);
		generation++;
	}

	
}

function resetIteration(){
	  var bodyObj = document.getElementById("string-container");
	  while (bodyObj.firstChild) {
		bodyObj.removeChild(bodyObj.firstChild);
	  }
	word = ABLsystem.axiom;
	generation=0;
	
}

function nextGeneration(){
	var outWord = ""
	for(var i = 0; i < word.length; i++){
		var currChar = word[i];
		for(var j = 0; j < ABLsystem.rules.length;j++){
			if(ABLsystem.rules[j].in == currChar){
				outWord += ABLsystem.rules[j].out;
			}
		}
	}
	return outWord
}

function drawFractalDemo(){
    pushTransform();
        transform.translate(-0.5,-0.4);
        filledTriangle(concatColor([colors[0],colors[1],colors[2]]), genTriangle(defCenter, defSideLen, [angles[0], angles[1], angles[2]]));
    popTransform();
}

