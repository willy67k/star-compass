const float = document.querySelector(".float");

document.querySelector(".float_btn").addEventListener("click", () => {
  float.classList.add("active");
});

document.querySelector(".float__group__close").addEventListener("click", () => {
  float.classList.remove("active");
});

document.querySelectorAll(".float__group a").forEach((el) => {
  el.addEventListener("click", () => {
    float.classList.remove("active");
  });
});

document.querySelector(".to-top").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
