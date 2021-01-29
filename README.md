## Introduction
Image style transfer using ML5.js. 

Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image.

Three pretrained models have been added from https://github.com/ml5js/ml5-data-and-models-server under ```models``` directory.

This repo is based on the example provided here https://github.com/ml5js/ml5-library/tree/main/examples/javascript/StyleTransfer/StyleTransfer_Image

## Run app
* Clone repo 
* Start a local web server using Python 2.7 ```python -m SimpleHTTPServer 8081``` or using sing Python 3 ```python -m http.server 8081```
* Go to http://localhost:8081/
