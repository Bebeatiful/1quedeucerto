var SpeechRecognition = window.webkitSpeechRecognition 
var recognition = new SpeechRecognition()
x = 0
y = 0
drawCircle = ""
drawRectangle = ""
drawApple = ""

function setup(){
    canvas = createCanvas(500,500)
}
function start(){
    document.getElementById("status").innerHTML = "O sistema está te ouvindo!"
    recognition.start()   
}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "A fala foi reconhecida como" + content 
    if(content == "círculo"){
        x = Math.floor(Math.random()*500)
        y = Math.floor(Math.random()*500)
        document.getElementById("status").InnerHTML = "O sistema está desenhando um circulo"
        drawCircle = "set"
    }
    if(content == "retângulo"){
        x = Math.floor(Math.random()*500)
        y = Math.floor(Math.random()*500)
        document.getElementById("status").InnerHTML = "O sistema está desenhando um retângulo"
        drawRectangle = "set"
    }
    if(content == "maçã"){
        x = Math.floor(Math.random()*500)
        y = Math.floor(Math.random()*500)
        document.getElementById("status").InnerHTML = "O sistema está desenhando uma maçã"
        drawApple = "set"
    }
}
function preload(){
    apple = loadImage("apple.png")
}
function draw(){
    if(drawCircle == "set"){
        circle(x,y,50)
        document.getElementById("status").innerHTML = "Um circulo foi desenhado!"
        drawCircle = ""
    }
    if(drawRectangle == "set"){
        rect(x,y,50,100)
        document.getElementById("status").innerHTML = "Um retângulo foi desenhado!"
        drawRectangle = ""
    }
    if(drawApple == "set"){
        image(apple, x, y, 50, 50)
        document.getElementById("status").innerHTML = "Uma maçã foi desenhada!"
        drawApple = ""
    }
    
}