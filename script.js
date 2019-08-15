var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


//var Textbox = $("#textbox0", "#textbox1", "#textbox2", "#textbox3", "#textbox4");
var Textbox;


//Makes recording ongoing
recognition.continuous = true;

//Takes what is said into mic to be dictated onto textbox
recognition.onresult = function(event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  
  //Textbox.val(Content);
  Textbox.value = transcript;
};

//Changes background color of mic button when clicked
var count = 1;
function setColor(id, color) {
  var property = document.getElementById(id);
  if (count == 0) {
    property.style.backgroundColor = "white";
    count = 1;
  } else {
    property.style.backgroundColor = "red";
    count = 0;
  }
}

//Changes placeholder text to listening when mic button is clicked
var pHolder = 1;
function placeText() {
  if (pHolder == 0) {
   Textbox.placeholder =
      "Write or rap your line here...";
    pHolder = 1;
  } else {
     Textbox.placeholder = "Listening...";
    pHolder = 0;
  }
}

//Function that stops and starts recording of speech manually when Mic button is pressed
var ssHolder = 1;
function startStop(id) {
  if (ssHolder == 0) {
    //Stops recording
    recognition.stop();
    console.log("ssholder=0");
    ssHolder = 1;
  } else {
    //When mic is clicked, it will start recording

    
   
    recognition.start();
    console.log("ssholder=2");
    
  
    ssHolder = 0;
  }
}

function buttonClick(id) {
  setColor(id, "white");
  var textBoxId = "textbox" + id.charAt(id.length-1)
  Textbox = document.getElementById(textBoxId)
  placeText();
  startStop(textBoxId);
}


function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}