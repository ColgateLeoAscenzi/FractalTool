//this code will handle the overall body of the project
function drawScene(){
    drawFractalDemo(word);

}


function drawFractalDemo(word){
    pushTransform();

	var startSize = 0.01;
    //adjust for canvas aspect ratio
        transform.scale(0.66666,1);
		// transform.translate(0,-0.8);
        var currentPos = [0,0,0];
        var transformStack = [];
        var newWord = word
        for(var i = 0; i < newWord.length; i++){
				var definitionsHash = Lsystem.definitions;
				eval(definitionsHash[newWord[i]]);
        }
    popTransform();
}
