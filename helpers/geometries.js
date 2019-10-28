var defCenter = [0,0];
var defSideLen = 1;
var word = []



function doLSystem(){
	word = [Lsystem.axiom];
	generateIteration();
	
}


function drawFractalDemo(){
    pushTransform();
	for(var i = 0; i < word.length; i++){
		pushTransform();
			var definitionsArr = Lsystem.definitions;
			for(var j = 0; j < definitionsArr.length; j++){
				var singleDef = definitionsArr[j].split(":")
				if(word[i] == singleDef[0]){
					eval(singleDef[1]);
				}
			}
		popTransform();
	}
//        transform.translate(-0.5,-0.4);
//        filledTriangle(concatColor([colors[0],colors[1],colors[2]]), genTriangle(defCenter, defSideLen, [angles[0], angles[1], angles[2]]));
	
    popTransform();
	
}

