var input=document.getElementById("btn");
input.addEventListener("keypress", function(event){
  if(event.key=="Enter"){
    event.preventDefault();
    document.getElementById("btn").click();
  }
});