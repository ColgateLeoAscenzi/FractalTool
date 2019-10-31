//this code will handle the overall body of the project

var startSize = 0.01;
var transformStack = [];
var currentPos = [0,0,0];
function drawScene(){
    drawFractalDemo(word);

}


function drawFractalDemo(word){
    pushTransform();

	startSize = 0.01;
    //adjust for canvas aspect ratio
        // transform.scale(0.66666,1);
		// transform.translate(0,-0.8);
        currentPos = [0,0,0];
        transformStack = [];
        var newWord = word
        for(var i = 0; i < newWord.length; i++){
				var definitionsHash = Lsystem.definitions;
                var newRule = eval(definitionsHash[newWord[i]])
                // console.log(newRule);
				// eval(newRule);
        }
    popTransform();
}

function drawForward(distance, color){
    if(color == undefined){
        color = [1,0,0,1];
    }
    drawLine(currentPos[0],currentPos[1],currentPos[2], startSize, [1,0,0,1]);
    currentPos[0]+= Math.cos(radians(currentPos[2]))*startSize;
    currentPos[1]+= Math.sin(radians(currentPos[2]))*startSize;
}

function changeAngle(newAngle){
    currentPos[2] += newAngle;
}

function pushCoords(){
    var copy = [currentPos[0], currentPos[1], currentPos[2]];
    transformStack.push(copy);
}

function popCoords(){
    currentPos = transformStack.pop();
}
