const fakePic = "https://thispersondoesnotexist.com/";

function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
console.log(realPic());

function game() {
  const imageCon = document.getElementById("images");
  const resulCon = document.getElementById("result");
  const streakCon = document.getElementById("streak");
  let streak = 0;
  function draw() {
    imageCon.innerHTML = "";
    resultCon.innerHTML = "";

    const again = document.createElement("button");
    again.textContent = "play again!";
    again.onclick = draw;

    const rand = Math.random() > 0.5;
    const arr = [rand, !rand];

    for (const isReal of arr) {
      const img = document.createElement("img");

      img.src = isReal ? realPic() : fakePic;
      imageCon.appendChild(img);
      img.onclick = function () {
        resultCon.textContent = isReal
          ? "you are correct!"
          : "you are incorrect";
          streak = isReal ? streak+1:0
          streakCon.innerHTML = ("streak:" + streak);
          
        resultCon.appendChild(again);
      };
    }
  }
  draw();






}

game();
