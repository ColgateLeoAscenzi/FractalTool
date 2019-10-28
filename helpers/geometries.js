var defCenter = [0,0];
var defSideLen = 1;
var word = []



function doLSystem(){
	word = [Lsystem.axiom];
	generateIteration();
	
}


function drawFractalDemo(){
    pushTransform();
//        transform.translate(-0.5,-0.4);
//        filledTriangle(concatColor([colors[0],colors[1],colors[2]]), genTriangle(defCenter, defSideLen, [angles[0], angles[1], angles[2]]));
	
    popTransform();
}

