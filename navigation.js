document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const buttons = document.querySelectorAll("[data-go]");

  buttons.forEach((button) => {
    const target = button.dataset.go;
    if (target === page) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      window.location.href = target;
    });
  });
});
