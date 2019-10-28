
var rule1 = {
	"in": "1",
	"out": "1"
}
var rule2 = {
	"in": "0",
	"out": "1[0]0"
}
var Lsystem = {
	"rules": [rule1, rule2],
	"axiom": "0",
	"alphabet": ["0","1","[","]"],
	"definitions": ["0:shape([0,0], [0,0], [[0.4,0,0.4,1]], 3, 1/(generation+1))",
					"1:shape([0,0], [0,0], [[0,1,0,1]], 3, 1/(generation+1))",
					"[:transform.translate(0.2+(generation/10),0.2+(generation/10))",
					"]:transform.translate(-0.2+(generation/10),0.2+(generation/10))"]
}


function generateIteration(){
	var addDiv = document.createElement("div");
	addDiv.id = "gen"+generation;
	if(generation == 0){
		addDiv.append(Lsystem.axiom);
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
	word = Lsystem.axiom;
	generation=0;
	
}

function nextGeneration(){
	var outWord = ""
	for(var i = 0; i < word.length; i++){
		var currChar = word[i];
		for(var j = 0; j < Lsystem.rules.length;j++){
			if(Lsystem.rules[j].in == currChar){
				outWord += Lsystem.rules[j].out;
			}
		}
	}
	return outWord
}

function submitRules(){
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
	
}