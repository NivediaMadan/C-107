function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1F2VHApiY/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}