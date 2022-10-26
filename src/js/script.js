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

document.querySelectorAll(".announce__wrapper h2").forEach((el) => {
  console.log(el.dataset.date);

  const targetDate = new Date(el.dataset.date);
  const today = new Date();

  if (targetDate.toDateString() === today.toDateString()) {
    el.classList.add("today");
  }

  if (targetDate < today) {
    el.classList.add("expired");
  }
});
