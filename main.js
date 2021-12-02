/* side navigation */
function w3_open() {
  var x = document.getElementById("mySidebar");
    x.style.width = "30%";
    x.style.maxWidth = "500px";
    x.style.fontSize = "20px";
    x.style.paddingTop = "50px";
    
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  
  
  function w3_close() {
  var y = document.getElementById("mySidebar");
     y.style.display = "none";
     
  }
  
  
  /* night mode */
  onload = init;
  function init(){
  document.querySelector(".night-mode").addEventListener("click",onClick,false);
  }
  let flag = false;
  
  function onClick(){
    if(flag){
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#000";
  document.getElementById("mySidebar").style.backgroundColor = "#fff";
  flag = !flag;
  }
    else{
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "#fff";
  document.getElementById("mySidebar").style.backgroundColor = "#222";
  flag = !flag;
    }
  }
  
  
  /* scrolldown to show word */
  window.onscroll = function() {myFunction()};
  function myFunction() {
  if (document.body.scrollTop > 245 || document.documentElement.scrollTop > 245) {
  document.getElementById("myIntro").classList.add("w3-show-inline-block");
  } 
  else {
  document.getElementById("myIntro").classList.remove("w3-show-inline-block");
  }
  }
  
  function myFun(p) {
    p.classList.toggle("change");
  }
  