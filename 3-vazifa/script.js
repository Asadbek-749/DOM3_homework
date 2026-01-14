const carElement = document.querySelector(".car");

document.addEventListener("keydown", (e) => {
  carElement.classList.remove("car--left", "car--right", "car--center");
  if (e.key === "ArrowLeft") {
    carElement.classList.add("car--left");
  } else if (e.key === "ArrowRight") {
    carElement.classList.add("car--right");
  } else if (e.key === "ArrowUp") {
    carElement.classList.add("car--center");
  }
});
