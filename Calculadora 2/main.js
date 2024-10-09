let txtN1 = document.querySelector("#n1");
let txtN2 = document.querySelector("#n2");
let txtResult = document.querySelector(".result");
let btnSuma = document.querySelector("#suma");
let btnResta = document.querySelector("#resta");
let btnMultiplicacion = document.querySelector("#multi");
let btnDivision = document.querySelector("#divi");

btnSuma.addEventListener("click", () => {
    let n1 = parseFloat(txtN1.value);
    let n2 = parseFloat(txtN2.value);
    let suma = n1 + n2;
    txtResult.innerHTML = " La suma es " + suma;
});
btnResta.addEventListener("click", () => {
    let n1 = parseFloat(txtN1.value);
    let n2 = parseFloat(txtN2.value);
    let resta = n1 - n2;
    txtResult.innerHTML = " La resta es " + resta;
});
btnMultiplicacion.addEventListener("click", () => {
    let n1 = parseFloat(txtN1.value);
    let n2 = parseFloat(txtN2.value);
    let Multiplicacion = n1 * n2;
    txtResult.innerHTML = " La multiplicacion es " + Multiplicacion;
});
btnDivision.addEventListener("click", () => {
    let n1 = parseFloat(txtN1.value);
    let n2 = parseFloat(txtN2.value);
    let division = n1 / n2;
    txtResult.innerHTML = " La division es " + division;
});