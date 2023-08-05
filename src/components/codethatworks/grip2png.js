  const handleGenerateImage = async () => {
    const suggestedFilename = 'Lego_RefArch.png'; // Default filename
    const userFilename = window.prompt('Enter a filename for the PNG image:', suggestedFilename);
  
    if (!userFilename) {
      console.log('Image generation canceled.');
      return;
    }
  
    console.log('Generating Image...');
  
    const gridContainer = document.querySelector('.grid-container'); // Replace with the actual CSS grid container class
  
    if (!gridContainer) {
      return;
    }
  
    try {
      // Convert the grid container to a PNG image using dom-to-image
      const image = await domtoimage.toPng(gridContainer);
  
      // Create a Blob from the image data URL
      const blob = dataURLtoBlob(image);
  
      // Use the saveAs function to download the PNG image with the user-provided filename
      saveAs(blob, userFilename);
  
      console.log('Generating Image Complete.');
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };
  

  // Helper function to convert data URL to Blob
  function dataURLtoBlob(dataUrl) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }