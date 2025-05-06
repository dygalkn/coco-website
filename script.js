function temaDegistir() {
  document.body.classList.toggle("karanlik");
}

document.querySelector("#temaButton").addEventListener("click", temaDegistir);
const mesajlar = [
  "Bugün yürüyüşe çıkalım mı?",
  "Kemik ver la!",
  "Hoşgeldin cnm yenisin sevdim seni!",
  "Biraz oyun oynayalım mı?"
];

document.addEventListener("DOMContentLoaded", () => {
  const rastgele = mesajlar[Math.floor(Math.random() * mesajlar.length)];
  const mesajDiv = document.createElement("div");
  mesajDiv.textContent = "🐾 " + rastgele;
  mesajDiv.style.marginTop = "20px";
  mesajDiv.style.fontWeight = "bold";
  mesajDiv.style.color = "#d63384";
  mesajDiv.style.textAlign = "center";
  document.body.appendChild(mesajDiv);
});
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = {
    q1: "Bichon Frise",
    q2: "1",
    q3: "Kemik",
    q4: "Yeni insanlarla tanışmak"
  };

  let score = 0;
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const result = document.getElementById("quiz-result");
  result.textContent = `Doğru sayısı: ${score} / ${Object.keys(answers).length}`;
  result.style.fontWeight = "bold";
  result.style.color = score === 4 ? "green" : "orange";
});
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}