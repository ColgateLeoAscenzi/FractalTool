//this code will handle the overall body of the project
function drawScene(){


}


function drawFractalDemo(word){
    pushTransform();
	
	var startSize = 0.01;
    //adjust for canvas aspect ratio
        transform.scale(0.66666,1);
		transform.rotate(radians(90));
		transform.translate(-0.8,0);
        var currentPos = [0,0,0];
        var transformStack = [];
        var newWord = word
        for(var i = 0; i < newWord.length; i++){
            pushTransform();
				var definitionsHash = Lsystem.definitions;
				eval(definitionsHash[newWord[i]]);
				
             	
//                    if(newWord[i] == "0"){
//                        pushTransform();
//                            //transform.rotate(currentPos[2]);
//                            drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [1,0,0,1]);
//                            currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;
//                            currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;
//                        popTransform();
//                    }
//                    else if(newWord[i] == "1"){
//                        pushTransform();
//                            //transform.rotate(currentPos[2]);
//                            drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [0,0,1,1]);
//                            currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;
//                            currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;
//                        popTransform();
//                    }
//                    else if(newWord[i] == "["){
//                        var copy = [currentPos[0], currentPos[1], currentPos[2]];
//                        transformStack.push(copy);
//                        currentPos[2] += 45;
//						
//
//                    }
//                    else if(newWord[i] == "]"){
//                        currentPos = transformStack.pop();
//                        currentPos[2] -= 45;
					//X
					//X:F+[[X]-X]-F[-FX]+X,F:FF
//			        if(newWord[i] == "F"){
//                        pushTransform();
//                            //transform.rotate(currentPos[2]);
//                            drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [222/255,222/255,171/255,1]);
//                            currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;
//                            currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;
//                        popTransform();
//                    }
//                    else if(newWord[i] == "+"){
//                       	currentPos[2] -= 25;
//                    }
//			        else if(newWord[i] == "-"){
//                        currentPos[2] += 25;
//                    }
//                    else if(newWord[i] == "["){
//                        var copy = [currentPos[0], currentPos[1], currentPos[2]];
//                        transformStack.push(copy);
//						
//
//                    }
//                    else if(newWord[i] == "]"){
//                        currentPos = transformStack.pop();
						

                    // }
          
			popTransform();

        }
    popTransform();
}
