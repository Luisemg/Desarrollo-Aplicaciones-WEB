//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    console.log(x);
    let y = eval(x)
    console.log(y);
    document.getElementById("result").value = y
}
  
//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}