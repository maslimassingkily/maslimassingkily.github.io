document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close">Close ✕</span><img src="" alt=""><span class="lightbox-caption"></span>';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('img');
  const caption = overlay.querySelector('.lightbox-caption');

  function openLightbox(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    caption.textContent = '© Maslim As-Singkily';
    overlay.classList.add('active');
  }
  function closeLightbox() {
    overlay.classList.remove('active');
    overlayImg.src = '';
  }
  overlay.addEventListener('click', closeLightbox);

  document.querySelectorAll('.lightbox-img').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
