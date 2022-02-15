//
document.getElementById("calc-btn").addEventListener("click", calculate)

function calculate() {
 // Get inputs
 let aVal = +document.getElementById("aIn").value;
 let xVal = +document.getElementById("xIn").value;
 let pVal = +document.getElementById("pIn").value;
 let qVal = +document.getElementById("qIn").value;
 

 //process and aoutput
 ansOut.innerHTML = output(aVal, xVal, pVal, qVal);
}

function output(a, x, p, q) {
  let ansOut = a * (x - p) ** 2 + q;
  console.log(ansOut);
  return ansOut;
}
