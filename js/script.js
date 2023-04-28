// let btn = $(document.getElementById("btnBaoule"));

// btn.click(function (e) {
//     $("#btnBaoulé").prop("location","./pages/langueBaoule.html")
//     console.log(e)
    
// })
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
   let logo  = $("#esuan");

    logo.on("click",()=>{
        window.location.href = "../index.html";
    })

   let ajout = $(".userName");
    let session = localStorage.getItem("session");
    session = JSON.parse(session);
    console.log(session);
   let recup = student.getAdd();
   recup.forEach(element => {
    console.log(element.numero)
    if(element.numero === session.user){
        ajout.text(`Mr ${element.nom} ${element.prenom}`)
    }
   });

})
