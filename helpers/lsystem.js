
var rule1 = {
	"in": "1",
	"out": "11"
}
var rule2 = {
	"in": "0",
	"out": "1[0]0"
}
var Ldefinitions = new Object();
// Ldefinitions["0"] = "drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [1,0,0,1]);"+
// 		"currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;"+
// 		"currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;";
// Ldefinitions["1"] =  "drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [0,0,1,1]);"+
//          "currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;"+
//           "currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;";
//
// Ldefinitions["["] = "var copy = [currentPos[0], currentPos[1], currentPos[2]];"+
//           "transformStack.push(copy);"+
//           "currentPos[2] += 45;";
// Ldefinitions["]"] =  "currentPos = transformStack.pop();"+
//           "currentPos[2] -= 45;";

var Lsystem = {
	"rules": [rule1, rule2],
	"axiom": "0",
	"alphabet": ["0","1","[","]"],
	"definitions": undefined
}




function generateIteration(){
	console.log(Lsystem);
	var addDiv = document.createElement("div");
	addDiv.id = "gen"+generation;
	if(generation == 0){
		if(mode == "text"){
			addDiv.append(Lsystem.axiom);
			document.getElementById("string-container").append(addDiv);
		}
		generation++;
	}
	else{
		word = nextGeneration();
		if(mode == "text"){
			addDiv.append(word);
			document.getElementById("string-container").append(addDiv);
		}

		generation++;
	}

	// drawFractalDemo(word);
	draw();

}

function resetIteration(){
	  var bodyObj = document.getElementById("string-container");
	  while (bodyObj.firstChild) {
		bodyObj.removeChild(bodyObj.firstChild);
	  }
	word = Lsystem.axiom;
	generation=0;



}

function nextGeneration(){
	var outWord = ""
	var added = false;
	for(var i = 0; i < word.length; i++){
		var currChar = word[i];
	 	added = false;
		for(var j = 0; j < Lsystem.rules.length;j++){
			if(Lsystem.rules[j].in == currChar){
				outWord += Lsystem.rules[j].out;
				added = true;
			}
		}
		if(!added){
			outWord+= currChar;
		}
	}
	return outWord
}

function submitRules(){
	var newRules = [];
	Lsystem.alphabet = undefined;
	Lsystem.axiom = undefined;
	Lsystem.rules = undefined;
	Lsystem.definitions = undefined;
	Ldefinitions = new Object();



	Lsystem.alphabet = document.getElementById("alphabetIn").value.split(",");
	Lsystem.axiom = document.getElementById("axiomIn").value;
	var rulesArr = document.getElementById("rulesIn").value.split(",");
	for(var i = 0; i < rulesArr.length; i++){
		var currRuleArr = rulesArr[i].split(":");
		var newRule = {"in":null, "out":null};
		newRule.in = currRuleArr[0];
		newRule.out = currRuleArr[1];
		newRules.push(newRule);

	}
	Lsystem.rules = newRules;

	var rules = "";
	for(var i = 0; i < Lsystem.rules.length; i++){
		if(i == Lsystem.rules.length-1){
			rules += Lsystem.rules[i].in + " -> " + Lsystem.rules[i].out
		}
		else{
			rules += Lsystem.rules[i].in + " -> " + Lsystem.rules[i].out+ ", "
		}


	}
	document.getElementById("rules").innerHTML = "Alphabet = ("+ Lsystem.alphabet + ")<br>Rules: ("+rules+")<br>Axiom: ("+Lsystem.axiom+") ";

	//<button onClick = "submitRules()">Add L-System</button>
	setupCode();

}

function setupCode(){
	var defContainer = document.createElement("div");
	defContainer.id = "definitionsAssign";
	document.getElementById("lsystem-container").append(defContainer);
	console.log(Lsystem.alphabet);
	for(var i = 0; i < Lsystem.alphabet.length; i++){
		var addDiv = document.createElement("div");
		addDiv.innerHTML = "  "+Lsystem.alphabet[i]+"  : <input type ='text' value = 'Enter an encoded rule' id = 'definition+"+Lsystem.alphabet[i]+"'>"
		document.getElementById("definitionsAssign").append(addDiv);
	}
	var submitButton = document.createElement("div");
	submitButton.innerHTML = '<button onClick = "createDefinitions()">Submit Definitions</button>'
	definitionsAssign.append(submitButton);


}

function createDefinitions(){

	// Ldefinitions["0"] = "drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [1,0,0,1]);"+
	// 		"currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;"+
	// 		"currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;";
	// Ldefinitions["1"] =  "drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [0,0,1,1]);"+
	//          "currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;"+
	//           "currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;";
	//
	// Ldefinitions["["] = "var copy = [currentPos[0], currentPos[1], currentPos[2]];"+
	//           "transformStack.push(copy);"+
	//           "currentPos[2] += 45;";
	// Ldefinitions["]"] =  "currentPos = transformStack.pop();"+
	//           "currentPos[2] -= 45;";

    for(var i = 0; i < Lsystem.alphabet.length; i++){
		Ldefinitions[Lsystem.alphabet[i]] = document.getElementById("definition+"+Lsystem.alphabet[i]).value;
	}

	console.log("Submitted!");
	console.log(Ldefinitions);
	Lsystem.definitions = Ldefinitions;

	document.getElementById("definitionsAssign").remove();

}
