const counterNode = document.querySelector(".counter");
const incrBtn = document.querySelector(".increment");
const clearBtn = document.querySelector(".clear");

clear ();

function render() {
  counterNode.textContent = counter;
}

function increment() {
  counter += 1;
}

function clear () {
  counter = 0;
}

incrBtn.addEventListener("click", function () {
  increment();
  render();
});

clearBtn.addEventListener("click", function () {
  clear ();
  render();

});

render();
