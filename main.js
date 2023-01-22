status = "";


function preload(){

}

function setup(){
    canvas = createCanvas(500, 500);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    }

function modelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
    }
}
