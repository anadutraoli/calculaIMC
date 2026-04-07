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

    let imcCalculo = userWeight / (userHeight * userHeight);

    let imcTabela = [
      { valor: 18.5, status: "Magreza", classe: "resultP magreza"},
      { valor: 24.9, status: "Normal", classe: "resultP normal"},
      { valor: 29.9, status: "Sobrepeso", classe: "resultP sobrepeso"},
      { valor: 34.9, status: "Obesidade grau I", classe: "resultP obesidadeI" },
      { valor: 39.9, status: "Obesidade grau II", classe: "resultP obesidadeII" },
      { valor: 40, status: "Obesidade grau III", classe: "resultP obesidadeIII" },
    ];

    let categoria = imcTabela.find((item) => imcCalculo <= item.valor);
    if (!categoria) categoria = imcTabela[imcTabela.length - 1];

    imcResult.innerText = `Seu IMC é: ${imcCalculo.toFixed(2)}`;
    imcResultText.innerText = `${categoria.status}`;
    imcResultText.className = `${categoria.classe}`
  }
}

function formatHeight(input) {
  let valor = input.value.replace(/[^\d]/g, "");
  if (valor.length >= 3) {
    input.value = valor.slice(0, valor.length - 2) + "." + valor.slice(-2);
  }
}
