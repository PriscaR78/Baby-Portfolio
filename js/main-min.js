// Fleche vers le haut
function arrowUp(){
    if (window.scrollY > 577){
      document.getElementsByClassName("backToTop")[0].classList.add("flex");
    } else {
      document.getElementsByClassName("backToTop")[0].classList.remove("flex");
    }
  }
  
  window.addEventListener("scroll", arrowUp);
  
  
  // SLIDER
  let controllerButton = document.getElementsByClassName("controller__bullet-slide")
  
  function slider(){
    let slideNumber = this.getAttribute("data-slide")
  
    if (slideNumber == 1) {
      document.getElementsByClassName("slider__slider-container")[0].style.left = "0"
    } else {
      document.getElementsByClassName("slider__slider-container")[0].style.left = "-100%"
    }
    for (let i = 0; i < controllerButton.length; i++) {
      controllerButton[i].classList.toggle("controller__bullet-slide--active")
    }
  }
  
  for (let i = 0; i < controllerButton.length; i++) {
    controllerButton[i].addEventListener('click', slider)
  }
  
  //Calculator 
  function calculBudget() {
    let jourTravail = document.getElementById("jour-travailles").value
    let budget = document.getElementById("budget").value
    let tjm = 350
    let totalCost = jourTravail * tjm
    if( totalCost < budget) {
      document.getElementsByClassName("calculator__message")[0].innerHTML = "Votre budget est suffisant"
    } else {
      document.getElementsByClassName("calculator__message")[0].innerHTML = "Votre budget est insuffisant"
    }
  }
  
  document.getElementById("calculer").addEventListener("click", calculBudget)

