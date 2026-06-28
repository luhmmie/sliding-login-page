const container = document.getElementById("container")
const signUpBtn = document.getElementById("signUpBtn")
const signInBtn = document.getElementById("signInBtn")

signUpBtn.addEventListener("click", function(){

container.classList.add("active")


});
signInBtn.addEventListener("click", function(){
container.classList.remove("active")

});
