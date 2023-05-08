const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculateBMI);

function calculateBMI() {
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value;

  const bmi = weight / (height * height);

  document.getElementById("result").innerHTML = bmi.toFixed(2);
}
