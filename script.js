AOS.init();

// Hiệu ứng gõ chữ
const typed = new Typed(".typing", {
  strings: ["Khám phá Cần Thơ", "Trái tim miền Tây", "Thành phố của sông nước"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Nút lên đầu trang
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};
backToTop.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});

// Dark/Light Mode
const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
