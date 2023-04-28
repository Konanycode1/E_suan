$(document).ready(()=>{
    let mydata ={
        id : 1,
        nom: "ab",
        prenom:"ko",
        niveau: "ce2",
        numero: "14566",
        pwd: "12345"
      }

      let btnBaoule = $("#btnBaoule");
      let btnBete = $("#btnBete");
      let btnSenoufo = $("#btnSenoufo");
      let btnYacouba = $("#btnYacouba");
      let modif = $(".modif");

      let btnGlobal = $(document.querySelectorAll(" .langu "));
      console.log(btnGlobal)

      let student = new Student(mydata);
      let session = localStorage.getItem("session");
      session = JSON.parse(session);
      console.log(session);

      if(session == null ){
        btnGlobal.on("click", (e)=>{
            window.location.href = "../pages/login.html";
        });
      }
      else{
        deconnexion();
        actionLang();
      }

      function deconnexion() {
        modif.text("deconnexion");
        modif.on("click", ()=>{
            localStorage.removeItem("session")
        })
      }

      function actionLang() {
        btnGlobal.on("click",(e)=>{
            let link = e.target.id;

            switch (link) {
                case "btnBaoule":
                  window.location.href = "./pages/langueBaoule.html";
                  break;
                case "btnBete":
                  window.location.href = "./pages/langueBete.html";
                  break;
                case "btnSenoufo":
                  window.location.href = "./pages/langueSenoufo.html";
                  break;
                case "btnYacouba":
                  window.location.href = "./pages/langueSenoufo.html";
                  break;
                default:
                    break;
            }
        })
        
        
      }
      



})