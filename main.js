statusModelo = "";

objetos = [];

var VideoLegalzinhoAleatorio = "";

function preload() {

VideoLegalzinhoAleatorio = createVideo("video.mp4");
}

function setup() {

canvas = createCanvas(480, 380);
canvas.center();
VideoLegalzinhoAleatorio.hide();
}

function draw() {

image(VideoLegalzinhoAleatorio, 0, 0, 480, 380);
if(statusModelo != "") {

ObjectDetector.detect(VideoLegalzinhoAleatorio, gotResults);
for(i=0; i< objetos.length; i++) {

document.getElementById("STATUS").innerHTML = "Status: Objetos Detectados";
document.getElementById("NumeroObjeto").innerHTML = "quantidade de Objetos Detectados: " + objetos.length;
fill("purple");
percent = floor(objetos[i].confidence*100);
text(objetos[i].label+""+percent+"%",objetos[i].x+15,objetos[i].y+15);
noFill();
stroke("red");
rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
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
}

function modelload() {

console.log("modelo aleatorio");
statusModelo = true;
VideoLegalzinhoAleatorio.loop();
VideoLegalzinhoAleatorio.speed(1);
VideoLegalzinhoAleatorio.volume(20);
}