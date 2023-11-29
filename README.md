# Week 12

Repository for week 12 examples.

## Drawing
![](./imgs/wk12-00_drw.jpg)

## Schematic
![](./imgs/wk12-00_sch.jpg)

## Board
![](./imgs/wk12-00_bb.jpg)

## Average
Implementation of a low-pass filter by averaging current and previous values of an analog input.

![](./imgs/wk12-01_avg-01.jpg)

## Serial
Open a serial connection between the browser and the Arduino using the [p5.webserial](https://github.com/gohai/p5.webserial) library.

![](./imgs/wk12-02_serial-03.jpg)

## WiFi
The Arduino starts a simple HTTP server that the p5js sketch can make [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) requests to.

![](./imgs/wk12-03_wifi-02.jpg)

## BLE
The Arduino initializes a BLE server, with a single service and single characteristic for ```data```.

After pairing, the p5js sketch can read from the ```data``` characteristic using the [p5.ble](https://github.com/ITPNYU/p5.ble.js) library.

![](./imgs/wk12-04_ble-01.jpg)
