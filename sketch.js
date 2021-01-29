let inputImg;
let statusMsg;
let transferBtn;
let style1;
let style2;
let style3;

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select("#statusMsg");

  // Get the input image
  inputImg = select("#inputImg");

  // Transfer Button
  transferBtn = select("#transferBtn");
  transferBtn.mousePressed(transferImages);

  // Create two Style methods with different pre-trained models
  style1 = ml5.styleTransfer("models/style-transfer/wave", modelLoaded);
  style2 = ml5.styleTransfer("models/style-transfer/udnie", modelLoaded);
  style3 = ml5.styleTransfer("models/style-transfer/scream", modelLoaded);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if (style1.ready && style2.ready) {
    statusMsg.html("Ready!");
  }
}

// Apply the transfer to both images!
function transferImages() {
  style1.transfer(inputImg, function (err, result) {
    createImg(result.src).parent("styleATransfered");
  });

  style2.transfer(inputImg, function (err, result) {
    createImg(result.src).parent("styleBTransfered");
  });

  style3.transfer(inputImg, function (err, result) {
    createImg(result.src).parent("styleCTransfered");
  });

  statusMsg.html("Done!");
}
