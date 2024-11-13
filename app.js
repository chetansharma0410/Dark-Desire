const images = [
    "A.png",
    "B.png",
    "C.png",
    "D.png",
    "E.png",
    "F.png",
    "G.png",
    "H.png",
    "I.png",
    "J.png",
    "K.png",
    "L.png",
    "M.png",
    "N.png",
    "O.png",
    "P.png",
    "Q.png",
    "R.png",
  ];

  let shuffleInterval;

  function startGame() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("shuffleImage").classList.remove("hidden");
    document
      .getElementById("shuffleImage")
      .classList.add("shuffleAnimation");
    shuffleImages();
  }

  function shuffleImages() {
    let currentIndex = 0;
    shuffleInterval = setInterval(() => {
      document.getElementById("shuffleImage").src = images[currentIndex];
      currentIndex++;
      if (currentIndex === images.length) currentIndex = 0;
    }, 150);

    setTimeout(() => {
      clearInterval(shuffleInterval);
      document
        .getElementById("shuffleImage")
        .classList.remove("shuffleAnimation");
      showRandomImage();
    }, 4000); // Shuffle for 4 seconds
  }

  function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const shuffleImage = document.getElementById("shuffleImage");

    shuffleImage.style.transform = "scale(1.2)";
    shuffleImage.src = images[randomIndex];

    setTimeout(() => {
      shuffleImage.style.transform = "scale(1)";
      document.getElementById("startButton").disabled = false;
    }, 500);
  }