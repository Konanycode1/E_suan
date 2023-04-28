let mydata ={
  id : 1,
  nom: "ab",
  prenom:"ko",
  niveau: "ce2",
  numero: "14566",
  pwd: "12345"
}
let student = new Student(mydata)
$(document).ready(()=>{
  const userForm = $(".userForm");
  const btnlog = $("#btnlog");
 
  let msg = $("#msg");
 

  const labels = document.querySelectorAll(".form-control label");
  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join("");
  });


  userForm.on('submit', (e)=>{
    e.preventDefault();
  })

  btnlog.on('click', ()=>{
    let user = $("#numero").val();
  let pwsd = $("#pwd").val();
    let data = {
      user: user,
      pwd: pwsd
    }
      Log(data)
    })

   function Log(data) {
    let isValid = false
    let recup = student.getAdd();
    let verif = recup.some(item => item.numero == data.user && item.pwd == data.pwd);
    if(verif){
      localStorage.setItem("session",JSON.stringify(data))
      msg.text("Connexion effectuée");
      msg.css("color", "green").css("text-align", "center");
      isValid = true
    }
    else{
      msg.text("Veillez vérifier vos information !!");
      msg.css("color", "red").css("text-align", "center");
    }
console.log(isValid)
    if(isValid){
      window.location.href = "../index.html"
    }
  
    
   }





})