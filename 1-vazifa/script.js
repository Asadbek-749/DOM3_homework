const circle = document.querySelector(".circle");
let count = 1;
document.addEventListener("keydown", (e) => {
  console.log("salom", e.key);
  if (e.key === "+") {
    circle.style.transform = `scale(${(count += 0.2)})`;
  } else if (e.key === "-") {
    if (count < 0.5) {
      alert("Eng kichik hajm");
    } else {
      circle.style.transform = `scale(${(count -= 0.2)})`;
    }
  } else if (e.key === "k") {
    circle.style.background = "blue";
  } else if (e.key === "s") {
    circle.style.background = "yellow";
  }
});
