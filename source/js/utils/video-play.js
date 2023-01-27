export function findVideos() {
  return document.querySelectorAll('[data-video]').forEach(setupVideo);
}

function setupVideo(video) {
  const videoLink = video.querySelector('[data-video-link]');
  const videoButton = video.querySelector('[data-video-button]');
  const id = videoLink.href.slice(-11);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);
    videoLink.remove();
    videoButton.remove();
    video.appendChild(iframe);
  });

  videoLink.removeAttribute('href');
  video.classList.add('is-active');
}

function createIframe(id) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('about__video-picture');

  return iframe;
}

function generateURL(id) {
  return `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`;
}
