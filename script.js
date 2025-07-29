let userWeightInput = document.getElementById("userWeightInput");
let userHeightInput = document.getElementById("userHeightInput");
let calculateBtn = document.getElementById("calculateBtn");
let imcResult = document.getElementById("imcResult");
let imcResultText = document.getElementById("imcResultText");

userWeightInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    let weight = userWeightInput.value;
    let height = userHeightInput.value;

    calculateIMC(weight, height);
  }
});

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let weight = userWeightInput.value;
  let height = userHeightInput.value;

  calculateIMC(weight, height);
});

function calculateIMC(weight, height) {
  if (weight.trim() === "" || height.trim() === "") {
    alert("adicione os dados!");
  } else {
    let userWeight = parseFloat(weight);
    let userHeight = parseFloat(height);
    imcResult.classList.add("resultP");
    imcResultText.classList.add("resultP");

    let imc = userWeight / (userHeight * userHeight);

    imcResult.innerText = `Seu IMC é: ${imc.toFixed(2)}`;

    switch (true) {
      case imc < 18.5:
        imcResultText.innerText = "Magreza";
        imcResultText.className = "resultP magreza";
        break;
      case imc < 24.9:
        imcResultText.innerText = "Normal";
        imcResultText.className = "resultP normal";

        break;
      case imc < 29.9:
        imcResultText.innerText = "Sobrepeso";
        imcResultText.className = "resultP sobrepeso";
        break;
      case imc < 39.9:
        imcResultText.innerText = "Obesidade";
        imcResultText.className = "resultP obesidade";
        break;
      default:
        imcResultText.innerText = "Obesidade Grave";
        imcResultText.className = "resultP obesidadeG";
        break;
    }
  }
}

function formatHeight(input) {
  let valor = input.value.replace(/[^\d]/g, "");
  if (valor.length >= 3) {
    input.value = valor.slice(0, valor.length - 2) + "." + valor.slice(-2);
  }
}
