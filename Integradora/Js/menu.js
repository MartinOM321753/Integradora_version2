const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach((optionMenu) => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelector(".options");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () => {
    // Cerrar los demás menús desplegables
    optionMenus.forEach((menu) => {
      if (menu !== optionMenu) {
        menu.classList.remove("active");
      }
    });

    optionMenu.classList.toggle("active");
  });

  options.addEventListener("click", (event) => {
    event.stopPropagation();

    const selectedOption = event.target.innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");

    const link = event.target.getAttribute("href");
    if (link) {
      window.location.href = link;
    }
  });
});

// Cerrar el menú desplegable si se hace clic fuera de él
document.addEventListener("click", (event) => {
  optionMenus.forEach((optionMenu) => {
    if (!optionMenu.contains(event.target)) {
      optionMenu.classList.remove("active");
    }
  });
});
