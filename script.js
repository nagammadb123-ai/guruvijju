/* ============================================================
   ✏️ EDIT THIS PART — your photos, captions, letter & songs
   ============================================================ */
const NAME = "Appu";           // what you call him
const NICK = "Guru";   // also: Bangaru

// Opening Kannada kavana (each string = one line)
const KAVANA = [
  "ಮಠದಲ್ಲಿ ಮೊದಲ ಬಾರಿ ನಿನ್ನ ನೋಡಿದ ಆ ಕ್ಷಣ…",
  "ಎಲ್ಲರಿಗೂ ನೀನು ಗೋಲ್ಡನ್ ಗೌರಿ… ನನಗೆ ಮಾತ್ರ ಅಪ್ಪು, ಗುರು🌸",
  "ಇವತ್ತಿಗೂ ನನ್ನ ಕಣ್ಣ ಮುಂದೆ ಅದೇ ದೃಶ್ಯ ಬರುತ್ತೆ…",
  "ಮೊದಲ ದಿನ ನಿನ್ನ ನೋಡಿದ್ದೇ ಒಂದು ಸುಂದರ ಕನಸು 🌙",
  "ಯಾಕೆ ಅಂತ ಗೊತ್ತಿಲ್ಲ",
  "ತುಂಬಾ ಪ್ರೀತಿ ಆಗಿಬಿಟ್ಟಿದೆ, ಮನಸ್ಸು ತುಂಬಿ ಹೋಗಿದೆ 💗",
  "ಗೌರಿ ಹುಣ್ಣಿಮೆಯ ದಿನ ಹುಟ್ಟಿದ ninage, ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು 🎂",
  "ಐ ಲವ್ ಯೂ ಅಪ್ಪು…❤️"
];

// Photos: file must be inside the photos/ folder. Add / remove lines freely.
const CHILDHOOD = [
  { src: "photos/childhood.jpg", cap: "My cute little Guru 🧸" },
  { src: "photos/childhood-2.png", cap: "That innocent smile 🥹" },
  { src: "photos/childhood-3.jpg", cap: "Born to be loved ❤️" },
  { src: "photos/childhood-4.jpg", cap: "Already so unique ✨" }
];
const PURI_HITA = [
  { src: "photos/purohita-1.png", cap: "My Modern Purohita 🙏" },
  { src: "photos/purohita-2.png", cap: "Golden Gouri ✨" },
  { src: "photos/purohita3.png", cap: "Where it all began 🌸" }
];
const US = [
  { src: "photos/hands-1.jpg",  cap: "Your hand in mine 🤝" },
  { src: "photos/couple-1.jpg", cap: "My flower & me 🌸" },
  { src: "photos/couple-3.jpg", cap: " Just us❤️" },
  { src: "photos/couple-4.jpg", cap: "Yoy & me🌼" },
  { src: "photos/couple-2.jpg", cap: "6:06 AM, with you 💑" },
  { src: "photos/couple-5.jpg", cap: "Hugged by my Appu 🫂" },
  { src: "photos/moment-henna.jpg",  cap: "Henna, made with love 🤎" },
  { src: "photos/moment-flower.jpg", cap: "A little flower, a big memory 💜" }
];

// Videos: put files in the videos/ folder (.mp4, keep each under ~20 MB)
const VIDEOS = [
  { src: "videos/flowers-on-his-head.mp4", cap: "I put flowers on his head 🌼" },
  { src: "videos/our-video.mp4", cap: "Our video 💞" },
  { src: "videos/rockinggg.mp4", cap: "Rockinggg! 🔥" },
  { src: "videos/chillingg.mp4", cap: "Chillingg 😎" }
];

// Love letter
const LETTER = `My Appu, my Guru, my Bangaru ❤️

Today is not just your birthday. It is the day someone very special came into this world — and made mine so much brighter.

Everyone calls you Golden Gouri, but you are my Appu. The first time I saw you at the matha, I felt you were different from everyone else. I still remember that scene as if it happened today.

I don't know why, but I fell for you so deeply. Your smile, your kindness, the way you are — everything feels like home to me.

We were even born on the same day — Gouri Hunnime. How is that not destiny? On your 27th birthday I wish you happiness, success, peace and every beautiful thing this world can give.

And whenever life gets hard, remember: someone believes in you, is proud of you, and loves you more than words can explain.

Happy Birthday, Appuuu.
Forever yours,
AMMUUU 💗`;

// Hearts: tap to reveal
const REASONS = [
  "❤️ One thing I adore about you: the way you are how genuine and gentle you are.",
  "🥹 A moment I'll never forget: the first time I saw you at the matha.",
  "🫂 What I wish I could do right now: hug you tight and never let go.",
  "🌍 A place I want to visit with you: anywhere, as long as your hand is in mine 🌊",
  "💍 A little dream: a lifetime of birthdays, together.",
  "💗 Something I don't say often enough: thank you for being you.",
  "🌸 A promise: I'll always stand by you, in every season of life.",
  "🌕 We share a birthday, born on Gouri Hunnime — the universe planned us.",
  "🧸 You make even ordinary days feel like festivals.",
  "✨ I'm proud of you — always, for everything.",
  "🎶 Every love song reminds me of you, Appu."
];

// Timeline of your story (edit dates/text!)
const TIMELINE = [
  { when: "The first day", text: "At the matha, I saw you for the first time. Something in me said: he is unique." },
  { when: "Slowly…", text: "Every little talk, every little glance became my favourite part of the day." },
  { when: "The day I knew", text: "I realised this was not just liking — it was love. Tumba preeti." },
  { when: "3 Nov 1999", text: "Gouri Hunnime — the same day, two souls were born. Yours and mine. 🌕" },
  { when: "Holding hands", text: "The first time our hands met, the whole world went quiet." },
  { when: "Today", text: "You turn 27, and on our shared birthday I am the luckiest girl to celebrate you. 🎂" }
];

// Songs: put MP3 files in the music/ folder, then edit names here
const SONGS = [
  { file: "music/audio1.mp3", name: "Kannada love song 1 💗" },
  { file: "music/audio2.mp3", name: "Kannada love song 2 🎶" },
  { file: "music/audio3.mp3", name: "Hindi love song 1 ❤️" }
];
/* ============================================================ */

const $ = id => document.getElementById(id);
const audio = $("audio");
let songIdx = 0, wasStarted = false;

/* ---------- starfield ---------- */
(function stars(){
  const c = $("stars"), x = c.getContext("2d");
  let S = [];
  function size(){ c.width = innerWidth; c.height = innerHeight;
    S = Array.from({length: Math.floor(innerWidth*innerHeight/6000)}, () => ({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.6+.3,p:Math.random()*6})); }
  size(); addEventListener("resize", size);
  (function loop(t){
    x.clearRect(0,0,c.width,c.height);
    S.forEach(s => { x.globalAlpha = .4 + .6*Math.abs(Math.sin(t/900+s.p)); x.fillStyle = "#fff"; x.beginPath(); x.arc(s.x,s.y,s.r,0,7); x.fill(); });
    requestAnimationFrame(loop);
  })(0);
})();

/* ---------- floating hearts ---------- */
const HEARTS = ["❤️","💗","💖","💕","🌸","✨"];
function heart(){
  const h = document.createElement("div");
  h.className = "float-heart";
  h.textContent = HEARTS[Math.floor(Math.random()*HEARTS.length)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (14 + Math.random()*26) + "px";
  h.style.animationDuration = (6 + Math.random()*7) + "s";
  $("hearts-layer").appendChild(h);
  setTimeout(() => h.remove(), 14000);
}
setInterval(heart, 700);

/* ---------- stage control ---------- */
function show(id){
  document.querySelectorAll(".stage").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

/* Stage 1: kavana, line by line */
$("startBtn").onclick = () => {
  $("startBtn").classList.add("hidden");
  startMusic();                       // click = browser allows audio
  const box = $("kavana");
  KAVANA.forEach((t,i) => {
    const d = document.createElement("span");
    d.className = "line"; d.textContent = t;
    d.style.animationDelay = (i*2.2) + "s";
    box.appendChild(d);
  });
  setTimeout(() => $("toLights").classList.remove("hidden"), KAVANA.length*2200 + 800);
};

/* Stage 2: fireworks */
$("toLights").onclick = () => {
  show("stage2");
  runFireworks();
  setTimeout(() => show("stage3"), 9000);
};

function runFireworks(){
  const c = $("fireworks"), x = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  let P = [], end = Date.now() + 9000;
  function boom(){
    const cx = Math.random()*c.width*.8 + c.width*.1, cy = Math.random()*c.height*.5 + 60;
    const col = `hsl(${Math.random()*360},100%,65%)`;
    for(let i=0;i<70;i++){
      const a = Math.random()*6.28, v = Math.random()*5+1.5;
      P.push({x:cx,y:cy,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:1,col,heart:Math.random()<.18});
    }
  }
  const iv = setInterval(boom, 500); boom();
  (function loop(){
    x.fillStyle = "rgba(11,6,32,.22)"; x.fillRect(0,0,c.width,c.height);
    P.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.vy+=.05; p.life-=.011;
      x.globalAlpha = Math.max(p.life,0); x.fillStyle = p.col;
      if(p.heart){ x.font="16px serif"; x.fillText("❤",p.x,p.y); } else { x.beginPath(); x.arc(p.x,p.y,2.2,0,7); x.fill(); } });
    P = P.filter(p => p.life>0);
    if(Date.now() < end){ requestAnimationFrame(loop); } else clearInterval(iv);
  })();
}

/* Stage 3 → main */
$("enterBtn").onclick = () => {
  document.querySelectorAll(".stage").forEach(s => s.classList.remove("active"));
  $("main").classList.remove("hidden");
  $("player").classList.remove("hidden");
  typeTitle();
  setupGalleries(); setupLetter(); setupReasons(); setupTimeline();
  scrollTo(0,0);
};

/* hero title letter by letter */
function typeTitle(){
  const t = `Happy Birthday, ${NAME} ❤️`, el = $("heroTitle"); let i = 0;
  el.textContent = "";
  const iv = setInterval(() => { el.textContent += t[i++]; if(i>=t.length) clearInterval(iv); }, 110);
}

/* confetti */
function confetti(){
  const E = ["🎉","🎊","❤️","💖","🎈","✨","🌸"];
  for(let i=0;i<60;i++){
    const c = document.createElement("div");
    c.className = "confetti"; c.textContent = E[i%E.length];
    c.style.left = Math.random()*100 + "vw";
    c.style.animationDuration = (2.5 + Math.random()*3) + "s";
    document.body.appendChild(c); setTimeout(() => c.remove(), 6000);
  }
}
$("confettiBtn").onclick = confetti;
document.querySelectorAll(".doll,.cake").forEach(d => d.onclick = confetti);

/* ---------- galleries ---------- */
function placeholder(label){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='#f6d6e4'/><text x='50%' y='45%' font-size='90' text-anchor='middle'>📷</text><text x='50%' y='66%' font-size='20' fill='#9b3c66' text-anchor='middle'>add ${label}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function buildGallery(id, list){
  const box = $(id);
  list.forEach(p => {
    const d = document.createElement("div"); d.className = "pol";
    const img = document.createElement("img"); img.src = p.src; img.alt = p.cap; img.loading = "lazy";
    img.onerror = () => { img.onerror = null; img.src = placeholder(p.src.split("/").pop()); };
    const cap = document.createElement("div"); cap.className = "cap"; cap.textContent = p.cap;
    d.append(img, cap);
    d.onclick = () => { $("lbImg").src = img.src; $("lbCap").textContent = p.cap; $("lightbox").classList.remove("hidden"); };
    box.appendChild(d);
  });
}
function setupVideos(){
  const box = $("gVideos");
  VIDEOS.forEach(v => {
    const d = document.createElement("div"); d.className = "vid";
    const el = document.createElement("video");
    el.src = v.src; el.controls = true; el.playsInline = true; el.preload = "metadata";
    el.onplay = () => { if(!audio.paused){ audio.pause(); $("play").textContent = "▶"; $("player").classList.add("paused"); el.dataset.resume = "1"; } };
    el.onended = el.onpause = () => { if(el.dataset.resume === "1" && el.ended){ audio.play().catch(()=>{}); $("play").textContent = "⏸"; $("player").classList.remove("paused"); el.dataset.resume = ""; } };
    el.onerror = () => { d.classList.add("missing"); el.remove(); const m = document.createElement("div"); m.className = "vmiss"; m.textContent = "🎬 add " + v.src.split("/").pop(); d.prepend(m); };
    const cap = document.createElement("div"); cap.className = "cap"; cap.textContent = v.cap;
    d.append(el, cap); box.appendChild(d);
  });
}
function setupGalleries(){
  setupVideos();
  buildGallery("gChild", CHILDHOOD);
  buildGallery("gPuri", PURI_HITA);
  buildGallery("gUs", US);
  $("lightbox").onclick = () => $("lightbox").classList.add("hidden");
}

/* ---------- love letter ---------- */
function setupLetter(){
  const env = $("envelope"), paper = $("paper");
  env.onclick = () => {
    if(env.classList.contains("open")) return;
    env.classList.add("open"); confetti();
    paper.textContent = ""; let i = 0;
    const iv = setInterval(() => { paper.textContent += LETTER[i++]; paper.scrollTop = paper.scrollHeight; if(i>=LETTER.length) clearInterval(iv); }, 35);
  };
}

/* ---------- reasons ---------- */
function setupReasons(){
  const g = $("heartsGrid");
  REASONS.forEach(r => {
    const b = document.createElement("button"); b.className = "hbtn"; b.textContent = "💗";
    b.onclick = () => { $("reasonBox").textContent = r; b.classList.add("seen"); b.textContent = "💖"; heart(); heart(); heart(); };
    g.appendChild(b);
  });
}

/* ---------- timeline ---------- */
function setupTimeline(){
  const t = $("timeline");
  TIMELINE.forEach(e => {
    const d = document.createElement("div"); d.className = "tl";
    d.innerHTML = `<b></b><br><span></span>`;
    d.querySelector("b").textContent = e.when; d.querySelector("span").textContent = e.text;
    t.appendChild(d);
  });
  const io = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting) en.target.classList.add("show"); }), {threshold:.3});
  document.querySelectorAll(".tl").forEach(n => io.observe(n));
}

/* ---------- final surprise ---------- */
$("bigHeart").onclick = () => {
  $("bigHeart").style.display = "none";
  $("finalMsg").classList.remove("hidden");
  confetti(); setTimeout(confetti, 1500);
  const imgs = US.slice(0,8);
  const spots = [[4,10],[78,8],[2,45],[80,42],[5,76],[78,74],[40,4],[40,80]];
  imgs.forEach((p,i) => {
    const im = document.createElement("img"); im.className = "fp"; im.src = p.src;
    im.onerror = () => { im.onerror = null; im.src = placeholder("photo"); };
    im.style.left = spots[i][0] + "vw"; im.style.top = spots[i][1] + "vh"; im.style.animationDelay = (i*.3) + "s";
    $("finalPhotos").appendChild(im);
  });
};


/* ---------- MOBILE-FRIENDLY MUSIC PLAYER ---------- */

function loadSong(i) {
  songIdx = (i + SONGS.length) % SONGS.length;

  audio.pause();
  audio.src = SONGS[songIdx].file;
  audio.currentTime = 0;

  $("songName").textContent = "♪ " + SONGS[songIdx].name;
}

async function startMusic() {
  loadSong(0);

  try {
    await audio.play();
    wasStarted = true;
    $("play").textContent = "⏸";
    $("player").classList.remove("paused");
  } catch (error) {
    wasStarted = false;
    $("play").textContent = "▶";
    $("songName").textContent = "Tap the music button to play ❤️";
    console.error("Music playback failed:", error);
  }
}

// Play and pause button
$("play").onclick = async () => {
  try {
    if (audio.paused) {
      if (!audio.src) loadSong(songIdx);
      await audio.play();
      wasStarted = true;
      $("play").textContent = "⏸";
      $("player").classList.remove("paused");
    } else {
      audio.pause();
      $("play").textContent = "▶";
      $("player").classList.add("paused");
    }
  } catch (error) {
    console.error("Play button error:", error);
    $("songName").textContent = "Please tap Play again ❤️";
  }
};

// Next song
$("next").onclick = async () => {
  loadSong(songIdx + 1);
  try {
    await audio.play();
    wasStarted = true;
    $("play").textContent = "⏸";
    $("player").classList.remove("paused");
  } catch (error) {
    console.error("Next song error:", error);
  }
};

// Previous song
$("prev").onclick = async () => {
  loadSong(songIdx - 1);
  try {
    await audio.play();
    wasStarted = true;
    $("play").textContent = "⏸";
    $("player").classList.remove("paused");
  } catch (error) {
    console.error("Previous song error:", error);
  }
};

// Automatically play the next song
audio.addEventListener("ended", async () => {
  loadSong(songIdx + 1);
  try {
    await audio.play();
  } catch (error) {
    console.error("Next track autoplay blocked:", error);
    $("play").textContent = "▶";
  }
});

// Update player when audio starts or pauses
audio.addEventListener("playing", () => {
  wasStarted = true;
  $("play").textContent = "⏸";
  $("player").classList.remove("paused");
});

audio.addEventListener("pause", () => {
  $("play").textContent = "▶";
  $("player").classList.add("paused");
});

audio.addEventListener("error", () => {
  console.error("Audio file could not load:", audio.currentSrc);
  $("songName").textContent = "Song could not load. Check music folder.";
});
