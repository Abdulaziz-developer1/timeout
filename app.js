const point = document.getElementById("point");
function update() {
  point.innerHTML = pointCounter;
}
let pointCounter = 0;
const btn = document.querySelectorAll(".btn");
const start = document.getElementById("start");
start.addEventListener("click", function () {
    pointCounter = 0;

  btn.forEach((element) => {
    element.classList.add("visible");
  });

  setTimeout(() => {
    btn.forEach((element) => {
      element.classList.remove("visible");
    });
  }, 5000);

  setTimeout(() => {
    alert(`You scored ${pointCounter} in 5 seconds!`);
  }, 5000);
});

btn.forEach((element) => {
  element.addEventListener("click", function () {
    pointCounter++;
    update();
  });
});

function modal(){
    document.getElementById('modal').style.display = 'flex';
}

function closeModal(){
    document.getElementById('modal').style.display = 'none';
};