statusModelo = "";

objetos = [];

var VideoLegalzinhoAleatorio = "";

function preload() {

}

function setup() {

canvas = createCanvas(480, 380);
canvas.center();
VideoLegalzinhoAleatorio = createVideo(VIDEO);
VideoLegalzinhoAleatorio.size(480,380)
VideoLegalzinhoAleatorio.hide();
}

function draw() {

image(VideoLegalzinhoAleatorio, 0, 0, 480, 380);
if(statusModelo != "") {

ObjectDetector.detect(VideoLegalzinhoAleatorio, gotResults);
for(i=0; i< objetos.length; i++) {

document.getElementById("STATUS").innerHTML = "Status: Objetos Detectados";
//document.getElementById("NumeroObjeto").innerHTML = "quantidade de Objetos Detectados: " + objetos.length;
fill("purple");
percent = floor(objetos[i].confidence*100);
text(objetos[i].label+""+percent+"%",objetos[i].x+15,objetos[i].y+15);
noFill();
stroke("red");
rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
if(objetos[i].label == objectName) {

VideoLegalzinhoAleatorio.stop();
objectDetector.detect(gotResults);
document.getElementById("objectStatus").innerHTML = objectName + " Encontrado";
synth = window.speechSynthesis;
utterThis = new SpeechSynthesisUtterance(objectName + " Encontrado");
synth.speak(utterThis);
}
else {

document.getElementById("objectStatus").innerHTML = objectName + " Não Encontrado";
}
}
}
}

function gotResults(error, results) {

if(error) {

console.log(error);
}
console.log(results);
objetos = results;
}

function START() {

ObjectDetector = ml5.objectDetector("cocossd", modelload);
document.getElementById("STATUS").innerHTML = "Status: Detectando Objetos";
ObjectName = document.getElementById("objectName").value;
}

function modelload() {

console.log("modelo aleatorio");
statusModelo = true;
}