const carElement = document.querySelector(".car");

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    carElement.classList.toggle("car--left");
  } else if (e.key === "ArrowRight") {
    carElement.classList.toggle("car--right");
  } else if (e.key === "ArrowUp") {
    carElement.classList.toggle("car--center");
  }
});
