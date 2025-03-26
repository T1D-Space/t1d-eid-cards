
function generateImage(designNumber) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const name = document.getElementById('nameInput').value;
  const selectedFont = document.getElementById('fontSelect').value;
  const img = new Image();
  img.src = `images/design${designNumber}.jpg`;

  img.onload = function () {
    document.fonts.load(`36px ${selectedFont}`).then(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.font = `bold 36px ${selectedFont}`;
      ctx.fillStyle = '#006699';
      ctx.textAlign = 'center';
      ctx.fillText(name, canvas.width / 2, 500);
      document.getElementById('downloadBtn').href = canvas.toDataURL();
      document.getElementById('downloadBtn').style.display = 'inline-block';
    });
  };
}
