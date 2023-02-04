const generateBtn = document.getElementById("generateBtn");

const singleHexColorGenerator = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    hexColor += hex[random];
    // console.log(hexColor);
  }
  return hexColor;
};

const colorPalletGenerator = () => {
  const colorPallet = [];
  for (let i = 0; i < 4; i++) {
    colorPallet.push(singleHexColorGenerator());
  }
  return colorPallet;
};

const renderColorPallet = () => {
  const colorsContainer = document.querySelector(".colors_container");

  colorsContainer.innerHTML = "";

  const colorPallet = colorPalletGenerator();
  colorPallet.forEach((color, i) => {
    const colordiv = document.createElement("div");
    colordiv.id = `color${i + 1}`;
    colordiv.style.background = color;
    colordiv.className = "colorBox";

    const colorTag = document.createElement("p");
    colorTag.id = `color${i + 1}Tag`;
    colorTag.className = "colorTag";
    colorTag.innerHTML = color;
    colordiv.appendChild(colorTag);

    colorsContainer.appendChild(colordiv);
  });
  
  const colorTags=document.querySelectorAll(".colorTag");
};
generateBtn.addEventListener("click", renderColorPallet);
