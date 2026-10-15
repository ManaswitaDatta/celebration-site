(() => {
  const cfg = window.WEDDING_CONFIG || {};
  document.querySelectorAll("[data-field]").forEach(el => {
    const key = el.dataset.field;
    if (cfg[key]) el.textContent = cfg[key];
  });

  document.querySelectorAll("[data-map]").forEach(el => {
    const url = cfg[el.dataset.map];
    if (url) {
      el.href = url;
    } else {
      el.addEventListener("click", e => {
        e.preventDefault();
        alert("The venue link will be added when the venue is confirmed.");
      });
    }
  });

  const target = cfg.weddingDate ? new Date(cfg.weddingDate).getTime() : NaN;
  const ids = ["days", "hours", "minutes", "seconds"];
  const note = document.getElementById("countdownNote");
  function tick() {
    if (!Number.isFinite(target)) {
      ids.forEach(id => document.getElementById(id).textContent = "—");
      note.textContent = "Our countdown begins once the exact wedding date is added.";
      return;
    }
    const diff = Math.max(0, target - Date.now());
    const vals = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000)
    ];
    ids.forEach((id, i) => document.getElementById(id).textContent = String(vals[i]).padStart(2, "0"));
    note.textContent = diff === 0 ? "Today is the day. Let the celebrations begin." : "Every second brings us closer.";
  }
  tick();
  window.setInterval(tick, 1000);

  const audio = document.getElementById("weddingMusic");
  const button = document.getElementById("musicToggle");
  const label = document.getElementById("musicLabel");
  const state = button.querySelector(".music-state");
  if (cfg.musicFile) audio.src = cfg.musicFile;
  button.addEventListener("click", async () => {
    if (!audio.src) {
      alert("To add music, upload an MP3 you have permission to use and set its filename in config.js.");
      return;
    }
    if (audio.paused) {
      try {
        await audio.play();
        button.setAttribute("aria-pressed", "true");
        label.textContent = "PAUSE OUR SONG";
        state.textContent = "−";
      } catch {
        alert("The music file could not be played. Please check the filename and try again.");
      }
    } else {
      audio.pause();
      button.setAttribute("aria-pressed", "false");
      label.textContent = "PLAY OUR SONG";
      state.textContent = "+";
    }
  });
})();