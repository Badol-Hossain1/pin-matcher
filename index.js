function getPin() {
  const pin = generatePin();
  const pinStr = pin + "";

  if (pinStr.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const generated = document.getElementById("generateInput");
  generated.value = pin;
});

document.getElementById("calculetor").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const typeNumber = document.getElementById("typedNumber");

  if (isNaN(number)) {
    if (number === "C") {
      typeNumber.value = "";
    } else if (number === "<") {
      const convert = typeNumber.value.split("");
      convert.pop();
      const remening = convert.join("");
      typeNumber.value = remening;
    }
  } else {
    const newTypedNum = typeNumber.value;
    const all = newTypedNum + number;
    typeNumber.value = all;
  }
  console.log();
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const typeNumber = document.getElementById("typedNumber");
  const value = typeNumber.value;
  const generated = document.getElementById("generateInput");
  const values = generated.value;

  if (value === values) {
    const success = document.getElementById("success");
    success.style.display = "block";
  } else {
    document.getElementById("wrong").style.display = "block";
  }
});
