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

      // إعداد روابط المشاركة بعد توليد الصورة
      const tweetText = encodeURIComponent("بطاقتي لعيد الفطر مع #فضاء_السكري_النوع_الأول 🎉\n#السكري_النوع_الأول #عيد_مبارك\n@T1D_sa @T1D_Space");
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${window.location.href}`;
      const whatsappText = encodeURIComponent("بطاقتي لعيد الفطر مع #فضاء_السكري_النوع_الأول 🎉\n" + window.location.href);
      const twitterBtn = `<a class="button" target="_blank" href="${tweetUrl}">🔁 مشاركة على X (تويتر)</a>`;
      const whatsappBtn = `<a class="button" target="_blank" href="https://wa.me/?text=${whatsappText}">📱 مشاركة على واتساب</a>`;
      document.getElementById('sharingButtons').innerHTML = `<br>${twitterBtn}<br>${whatsappBtn}`;
      document.getElementById('sharingButtons').style.display = 'block';
    });
  };
}
