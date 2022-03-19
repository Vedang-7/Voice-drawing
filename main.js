x = 0;
y = 0;
apple="apple.png"
screen_width="";
screen_height="";
speak_data= "";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 recognition.onresult = function(event) {
 to_number=Number(content);
 console.log(event); 
 if(Number.isInteger(to_number)=true){
  draw("apple");
 }
 else{
   console.log("The speech has not recognized a number")
 }
 content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width=window.innerWidth;
  screen_height=innerHeight;
  canvas = createCanvas(900,600);
}

function draw() {
  if(apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
  }
  for(var i=1; i<= to_number; i++)
  {
    x= Math.floor(Math.random()* 700);
    y= Math.floor(Math.random()* 400);
    image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "Apple drawn";
}
function preload(){
   loadImage(apple);
}