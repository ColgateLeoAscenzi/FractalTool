//this code will handle the overall body of the project
function drawScene(){


}


function drawFractalDemo(word){
    pushTransform();
    //adjust for canvas aspect ratio
        transform.scale(0.66666,1);
        if(generation < 4){
            transform.scale(1);

        }
        else if (generation < 7){
            transform.scale(0.3);

        }
        else{
            transform.scale(0.05);
        }
        transform.rotate(radians(90));
        if(generation < 4){
            transform.translate(-0.5-0.1*generation,0);

        }
        else if (generation < 7){
            transform.translate(-0.5-0.7*generation,0);

        }
        else{
            transform.translate(-0.5-1.9*generation,0);
        }
        var currentPos = [0,0,0];
        var pushCounter = 0;
        var transformStack = [];

        var newWord = word
        for(var i = 0; i < newWord.length; i++){
            pushTransform();
            pushCounter++;
                var definitionsArr = Lsystem.definitions;
                // for(var j = 0; j < definitionsArr.length; j++){
                //     var singleDef = definitionsArr[j].split(":")
                    //if(newWord[i] == singleDef[0]){
                        //eval(singleDef[1]);
                    //}
                    if(newWord[i] == "0"){
                        pushTransform();
                            //transform.rotate(currentPos[2]);
                            drawLine(currentPos[0],currentPos[1],currentPos[2], 0.2, [1,0,0,1]);
                            currentPos[0]+= Math.cos(radians(currentPos[2]))*0.2;
                            currentPos[1]+= Math.sin(radians(currentPos[2]))*0.2;
                        popTransform();
                    }
                    else if(newWord[i] == "1"){
                        pushTransform();
                            //transform.rotate(currentPos[2]);
                            drawLine(currentPos[0],currentPos[1],currentPos[2], 0.2, [0,0,1,1]);
                            currentPos[0]+= Math.cos(radians(currentPos[2]))*0.2;
                            currentPos[1]+= Math.sin(radians(currentPos[2]))*0.2;
                        popTransform();
                    }
                    else if(newWord[i] == "["){
                        var copy = [currentPos[0], currentPos[1], currentPos[2]];
                        transformStack.push(copy);
                        currentPos[2] += 45;

                    }
                    else if(newWord[i] == "]"){
                        currentPos = transformStack.pop();
                        currentPos[2] -= 45;

                    // }
                }
                popTransform();

        }
    popTransform();
}
