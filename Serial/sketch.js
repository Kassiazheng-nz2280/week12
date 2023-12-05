let mSerial;

let connectButton;

let readyToReceive;
let cBackgroundColor;

let isLightOn = false;

function receiveSerial() {
  let line = mSerial.readUntil("\n");
  // trim(line);
  // if (!line) return;
  console.log(line);

//   if (line.charAt(0) != "{") {
//     print("error: ", line);
//     readyToReceive = true;
//     return;
//   }

//   let data = JSON.parse(line).data;
//   let a0 = data.A0;

//   cBackgroundColor = map(a0.value, a0.min, a0.max, 0, 255);
  readyToReceive = true;
}

function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);

    readyToReceive = true;
    connectButton.hide();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cBackgroundColor = 0;
  readyToReceive = false;

  mSerial = createSerial();

  connectButton = createButton("Connect To Serial");
  connectButton.position(width / 2, height / 2);
  connectButton.mousePressed(connectToSerial);
  
  lightButton = createButton("Toggle LED");
  lightButton.position(100, 100);
  lightButton.mousePressed(toggleLED);
}

function toggleLED(){
  console.log("Clicked");
  if(isLightOn == false){
    mSerial.write("on");
    isLightOn = true;
  }else{
    mSerial.write("off");
    isLightOn = false;
  }
  
}


function draw() {
  background(cBackgroundColor);

  if (mSerial.opened() && readyToReceive) {
    
    readyToReceive = false;
    mSerial.clear();
    // mSerial.write("HHello");
  }

  if (mSerial.availableBytes() > 0) {
    receiveSerial();
  }
}