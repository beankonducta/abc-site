window.onload = function() {
    for(let i = 0; i < 10; i++)
        addElement();
}

function addElement() {
  const newImg = document.createElement("img");
  newImg.src = `./assets/icon-${randomIntFromInterval(1, 6)}.svg`;
  newImg.style.left = `${randomIntFromInterval(0, 100)}%`
  newImg.style.position = "absolute"
  newImg.style.animation = `move-${randomIntFromInterval(1, 10)} ${randomIntFromInterval(60, 120)}s infinite`
  newImg.style.width = `${randomIntFromInterval(2, 5)}%`
  document.body.append(newImg)
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}