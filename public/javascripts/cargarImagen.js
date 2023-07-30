
function watermarkImageWithText(id, autenticado, privacidad, marcaAgua) {

    if(!autenticado){
    console.log(" probando watermarkImageWithText");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    originalImage = document.getElementById("foto" + id);
    originalImage.removeAttribute("onload");
    const canvasWidth = originalImage.width;
    const canvasHeight = originalImage.height;
  
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    console.log("canvas width: " + canvas.width);
    console.log("canvas height: " + canvas.height);
  
    // initializing the canvas with the original image
    context.drawImage(originalImage, 0, 0, canvasWidth, canvasHeight);
  
    // Create a new canvas for drawing the watermark text with transparency
    const watermarkCanvas = document.createElement("canvas");
    watermarkCanvas.width = canvasWidth;
    watermarkCanvas.height = canvasHeight;
    const watermarkContext = watermarkCanvas.getContext("2d");
  
    // adding a grey watermark text in the center with transparency and gothic style
    watermarkContext.fillStyle = "grey";
    watermarkContext.textBaseline = "middle";
    watermarkContext.textAlign = "center";
    watermarkContext.globalAlpha = 0.5; // Set transparency (0.0 to 1.0)
    // Use a gothic-style font (ensure it's available on the user's system)
    const fontSize = 100; // Adjust the font size as needed
    watermarkContext.font = `bold ${fontSize}px 'Lobster', cursive`;
  
    const text = "Fotaza";
    const textWidth = watermarkContext.measureText(text).width;
    const textHeight = fontSize; // Ascent + Descent should be approximately equal to fontSize for a single line of text
  
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
  
    // Rotate the watermark text 45 degrees (convert angle to radians)
    const angleInRadians = (15 * Math.PI) / 180;
  
    // Adjust the position after rotation to keep the text centered
    const rotatedCenterX = centerX * Math.cos(angleInRadians) - centerY * Math.sin(angleInRadians);
    const rotatedCenterY = centerX * Math.sin(angleInRadians) + centerY * Math.cos(angleInRadians);
  
    watermarkContext.translate(centerX, centerY);
    watermarkContext.rotate(angleInRadians);
    watermarkContext.fillText(text, 0, 0);
  
    // Reset the rotation
    watermarkContext.rotate(-angleInRadians);
    watermarkContext.translate(-centerX, -centerY);
  
    // Combine the original image with the watermark text
    context.drawImage(watermarkCanvas, 0, 0);
    watermarkCanvas.remove();
    originalImage.src = canvas.toDataURL();
  
  
    }else if(autenticado && privacidad==2){
        

       console.log("probando watermarkImageWithText");
        console.log(marcaAgua);
        console.log("probando watermarkImageWithText");
      
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const originalImage = document.getElementById("foto" + id);
        originalImage.removeAttribute("onload");
        const canvasWidth = originalImage.width;
        const canvasHeight = originalImage.height;
      
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
       console.log("canvas width: " + canvas.width);
       console.log("canvas height: " + canvas.height);
      
        // initializing the canvas with the original image
        context.drawImage(originalImage, 0, 0, canvasWidth, canvasHeight);
      
        // Create a new canvas for drawing the watermark text with transparency
        const watermarkCanvas = document.createElement("canvas");
        watermarkCanvas.width = canvasWidth;
        watermarkCanvas.height = canvasHeight;
        const watermarkContext = watermarkCanvas.getContext("2d");
      
        // adding a grey watermark text at the bottom center with transparency and gothic style
        watermarkContext.fillStyle = "grey";
        watermarkContext.textBaseline = "bottom";
        watermarkContext.textAlign = "center";
        watermarkContext.globalAlpha = 0.5; // Set transparency (0.0 to 1.0)
        // Use a gothic-style font (ensure it's available on the user's system)
        let fontSize ;
        if(marcaAgua.length>10){
             fontSize = 25; // Adjust the font size as needed
        }else{
         fontSize = 50; // Adjust the font size as needed
        }
        watermarkContext.font = `bold ${fontSize}px 'Lobster', cursive`;
      
        const text = marcaAgua;
        const textWidth = watermarkContext.measureText(text).width;
        const textHeight = fontSize; // Ascent + Descent should be approximately equal to fontSize for a single line of text
      
        const centerX = canvasWidth / 2;
        const bottomY = canvasHeight /2; // 20 pixels from the bottom
      
        // Adjust the position to center the text horizontally
        const textX = centerX ;
      
        // Adjust the position to center the text vertically
        const textY = canvasHeight - (textHeight / 2) - 130 // 20 pixels from the bottom
      
        // Draw the watermark text
        watermarkContext.fillText(text, textX, textY);
      
        // Combine the original image with the watermark text
        context.drawImage(watermarkCanvas, 0, 0);

        watermarkCanvas.remove();
      
        originalImage.src = canvas.toDataURL();
    }
    
        
}


function chatOn(){
    console.log("estoy chateando")
    fetch(`/mensaje/`)
      .then(response => response.json())
          .then(data => {
            console.log("---------data-----------")
            console.log(data);
    })
  }