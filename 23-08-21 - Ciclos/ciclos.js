var number;
var result;

function cicloFor(){
  var numberElement = document.getElementById("n");
  number = numberElement.value;
  console.log(number);
  result = 1;
  for (var i=1; i<= number; i++){
    result *= i;
  }
  console.log(result);
  document.getElementById("for").innerHTML = result;
}

function cicloWhile(){
  var numberElement = document.getElementById("n");
  number = numberElement.value;
  console.log(number);
  result = 0;
  var i = 1;
  while(i<=number){
    result += i;
    i++;
  }
  console.log(result);
  document.getElementById("while").innerHTML = result;
}

function cicloDoWhile(){
  var numberElement = document.getElementById("n");
  number = numberElement.value;
  console.log(number);
  result = 0;
  var i = 1;
  var avg;
  do {
    console.log(i);
    result += 1;
    i++;
  } while (i<=number);
  avg = result / number;
  console.log(avg);
  document.getElementById("dowhile").innerHTML = avg;
}
