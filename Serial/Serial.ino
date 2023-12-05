// HW12 files
#include <ArduinoJson.h>

int a0Val = 0;
int a0Min = 5000;
int a0Max = 0;

bool isLightOn = LOW;
int bluePin = 12;

void sendData() {
  StaticJsonDocument<96> resJson;
  JsonObject data = resJson.createNestedObject("data");
  JsonObject A0 = data.createNestedObject("A0");

  A0["value"] = a0Val;
  A0["min"] = a0Min;
  A0["max"] = a0Max;

  String resTxt = "";
  serializeJson(resJson, resTxt);

  Serial.println(resTxt);
}

void setup() {
  Serial.begin(9600);
  while (!Serial) {}

  pinMode(bluePin, OUTPUT);
}

void loop() {
  a0Val = analogRead(A0);
  a0Min = min(a0Min, a0Val);
  a0Max = max(a0Max, a0Val);

  digitalWrite(bluePin, isLightOn);

  if (Serial.available() > 0) {
    String strIn = Serial.readStringUntil('\n');
    Serial.println(strIn);
    if (strIn == "on") {
      Serial.println("turn on the light");
      isLightOn = HIGH;  
    }else if(strIn == "off") {
      Serial.println("turn off the light");
      isLightOn = LOW;
    }
    else{
      Serial.println("something else");
    }
    // Serial.print(Serial.read());
    // if (byteIn == 0xAB) {
    //   Serial.flush();
    //   sendData();
    // }
  }



  delay(2);
}