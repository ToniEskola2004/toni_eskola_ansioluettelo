function initializeProgressBar(skillElement) {
  let number = skillElement.querySelector(".number");
  let targetPercentage = parseInt(skillElement.getAttribute('data-target'), 10);

  let counter = 0;

  function updateCounter() {
    setInterval(function () {
      if (counter <= targetPercentage) {
        number.innerHTML = counter + "%";
        counter += 1;
        requestAnimationFrame(updateCounter);
      }
    }, 50);
  }
  requestAnimationFrame(updateCounter);
}

document.querySelectorAll('.skill').forEach(skillElement => {
  initializeProgressBar(skillElement);
});