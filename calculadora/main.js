let formSuma = document.getElementById("formsuma");
let btnResta= document.getElementById("formsuma");

formSuma.addEventListener("submit", (e) => {
    e.preventDefault();
    let n1 = e. target.nmbN1.value;
      console.log(n1);
      let n2 = e. target.nmbN2.value;
      var flN1=parseFloat(n1);
      var flN2=parseFloat(n2);
      console.log(n2);
      let resul = flN1 + flN2;
      console.log(resul);
      document.querySelector(".result").innerHTML = "la suma es :" + resul;
    });
    formResta.addEventListener("formRestar", (e) => {
        e.preventDefault();
        let n1 = e. target.nmbN1.value;
          console.log(n1);
          let n2 = e. target.nmbN2.value;
          var flN1=parseFloat(n1);
          var flN2=parseFloat(n2);
          console.log(n2);
          let resul = flN1 - flN2;
          console.log(resul);
          document.querySelector(".result").innerHTML = "la resta es :" - resul;
        });
            
        