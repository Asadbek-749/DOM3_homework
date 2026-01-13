const carElement = document.querySelector(".car");

document.addEventListener("keydown", (e) => {
  if (e.key === "r") {
    carElement.classList.add("car--avtive");
    document.body.classList.add("body--active");
  } else if (e.key === "ArrowUp") {
    carElement.style.top = `80px`;
  } else if (e.key === "ArrowDown") {
    carElement.style.bottom = `80px`;
  } else if (e.key == ".") {
    alert("Boshlash uchun R konopkasini bosing");
  }
});
