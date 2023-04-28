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
    const myForm = $(".myForm")
    const btn = $("#clic");
    const msg = $(".msg");
    let count = 0


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
   
    myForm.on('submit', (e)=>{
        e.preventDefault()
    })
    
    btn.on("click",()=>{
        const nom = $("#nom").val();
        const prenom = $("#prenom").val();
        const niveau = $("#niveau").val();
        const numero =$("#numero").val();
        const pwd = $("#pwd").val();
        const cpwd = $("#cpwd").val();
        let isValid = false
        if(nom != "" && prenom != "" && niveau != "" && numero != "" && pwd != "" && cpwd !="" ){
            if( pwd === cpwd){
                let kk = nom.substring(0,3)
                let val = Math.floor(Math.random()*(200-1))+1
                let id = `${kk}${val}` ;
                let data = {
                    id : id,
                    nom: nom,
                    prenom:prenom,
                    niveau: niveau,
                    numero: numero,
                    pwd: pwd
                }
                let recup = student.getAdd()
                
                recup = recup.some(item => item.numero === numero)
                alert(recup)
                if(recup == true){
                    msg.text("Désolé !! vous avez déja un comptes");
                    msg.css("color", "red").css("text-align", "center");
                }
                else{
                    student.setCreate(data);
                    msg.text("Merci d'avoir créer votre compte sur é-suan");
                    msg.css("color", "green").css("text-align", "center");
                    isValid = true;
                }
                
            }
            else{
                msg.text("Mot de passe n'est pas identique"),
                msg.css("color", "red").css("text-align", "center");
            }
        }
        else{
            msg.text("Veuillez remplir tous les chaamps")
            msg.css("color", "red").css("text-align", "center")
        }

        if (!isValid) {
            window.location.href = "../pages/signup.html"
        }
        else{
            window.location.href = "../pages/login.html"
        }

    })
})