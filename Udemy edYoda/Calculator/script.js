function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate(value) {
  let expression = document.getElementById("display").value;
  try {
    let res = eval(expression);
    document.getElementById("display").value = res;
  } catch (error) {
    alert("Please Enter Valid Input!!!");
  }
}

function clearInput() {
  document.getElementById("display").value = "";
}
