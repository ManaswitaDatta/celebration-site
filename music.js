/* Best-effort YouTube autoplay with a small, accessible fallback control. */
(function () {
  const button = document.getElementById('musicToggle');
  const label = document.getElementById('musicToggleLabel');
  if (!button || !label) return;

  let player = null;
  let ready = false;
  let playing = false;
  let apiRequested = false;

  function loadApi() {
    if (apiRequested || window.YT) {
      if (window.YT && window.YT.Player && !player) createPlayer();
      return;
    }
    apiRequested = true;
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.head.appendChild(script);
  }

  function createPlayer() {
    if (player || !window.YT || !window.YT.Player) return;
    player = new YT.Player('youtube-audio-player', {
      width: '200', height: '200', videoId: 'VUCI-1vIbUo',
      playerVars: {
        autoplay: 1, controls: 0, disablekb: 1, fs: 0,
        loop: 1, playlist: 'VUCI-1vIbUo', playsinline: 1, rel: 0
      },
      events: {
        onReady(event) {
          ready = true;
          try {
            event.target.unMute();
            event.target.setVolume(55);
            event.target.playVideo();
          } catch (_) {
            label.textContent = 'PLAY MUSIC';
          }
        },
        onStateChange(event) {
          playing = event.data === YT.PlayerState.PLAYING;
          button.setAttribute('aria-pressed', String(playing));
          button.setAttribute('aria-label', playing ? 'Pause wedding music' : 'Play wedding music');
          label.textContent = playing ? 'MUSIC ON' : 'MUSIC';
          button.classList.toggle('is-playing', playing);
        },
        onAutoplayBlocked() {
          label.textContent = 'PLAY MUSIC';
          button.setAttribute('aria-label', 'Tap to play wedding music');
        },
        onError() {
          label.textContent = 'MUSIC UNAVAILABLE';
          button.setAttribute('aria-label', 'Wedding music unavailable');
        }
      }
    });
  }

  window.onYouTubeIframeAPIReady = createPlayer;
  button.addEventListener('click', function () {
    if (!ready || !player) {
      loadApi();
      label.textContent = 'LOADING';
      return;
    }
    try {
      if (playing) player.pauseVideo();
      else {
        player.unMute();
        player.setVolume(55);
        player.playVideo();
      }
    } catch (_) {
      label.textContent = 'PLAY MUSIC';
    }
  });

  loadApi();
})();
