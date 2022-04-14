window.onload = init;
var mainDisplayText, secondDisplayText, mainNumber
  function init(){

    mainDisplayText = document.getElementById("mainDisplayText")
    secondDisplayText = document.getElementById("secondDisplayText")
    mainNumber = ""
  }



function onNumberClick(buttonValue) {
    mainNumber = mainNumber+buttonValue
    secondDisplayText.textContent = mainNumber
}