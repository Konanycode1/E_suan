const form = document.querySelector(".formQuiz");
const  bloc = document.querySelectorAll(".bloc")
let tableResultat = [];
const reponse = ["c","c","a","c","b","b","b","a"]
const emojis = ["✅","🫶","👀","🙄"]
const titreResultaut = document.querySelector(".resultat h2")
const texteResultat= document.querySelector(".note");
const aideResultat = document.querySelector(".aide");

const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");


function openModal() {
    modal.classList.remove("hide");
}
  
function closeModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-overlay"))
            modal.classList.add("hide");
    } else modal.classList.add("hide");
}
  
openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);

let verifTableau = []

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    for(let i=1; i<9; i++){
        tableResultat.push(document.querySelector(`input[name="r${i}"]:checked`).value)
    }
    verifFunc(tableResultat)
    tableResultat =[]
})
function verifFunc(tabResultat){
    for (let i = 0; i < 8; i++) {
        if(tabResultat[i] === reponse[i]){
            verifTableau.push(true);
        }
        else{verifTableau.push(false)}
    }
    afficherResultat(verifTableau)
    couleur(verifTableau)
    verifTableau=[]
}
function afficherResultat(tabbChack) {
    const nbFautes = tabbChack.filter(el => el !== true).length
    console.log(nbFautes)
    switch(nbFautes){
        case 0:
            titreResultaut.innerText = "✅ Bravo, vous avez gangné ✅"
            aideResultat.innerText =""
            texteResultat.innerText = "8/8";
            break
        case 1:
            titreResultaut.innerText = "👀 Faites des effort👀 ";
            aideResultat.innerText ="Retentez vous avez fait une faute "
            texteResultat.innerText = "7/8";
            break
        case 2:
            titreResultaut.innerText = "👀 Faites des effort👀" 
            aideResultat.innerText ="vous avez fait deux fautes ";
            texteResultat.innerText = "6/8";
            
            break
        case 3:
            titreResultaut.innerText = "👀 Faites des effort👀" 
            aideResultat.innerText =" vous avez fait trois faute "
            texteResultat.innerText = "5/8";
            break
        case 4:
            aideResultat.innerText =" vous avez fait quatre faute"
            titreResultaut.innerText = "🙄 Faites des effort🙄 ";
            texteResultat.innerText = "4/8";
            break
        case 5:
            titreResultaut.innerText = "👀 Faites des effort👀 ";
            aideResultat.innerText ="Retentez vous avez fait cinq faute "
            texteResultat.innerText = "3/8";
            break
        case 6:
            titreResultaut.innerText = "👀 Faites des effort👀" 
            aideResultat.innerText ="Retentez vous avez fait six fautes ";
            texteResultat.innerText = "2/8";
                
            break
        case 7:
            titreResultaut.innerText = "👀 Faites des effort👀" 
            aideResultat.innerText ="Retentez vous avez fait sept faute "
            texteResultat.innerText = "1/8";
            break
        case 8:
            aideResultat.innerText ="🙄 Faites des effort🙄"
            titreResultaut.innerText = "Retentez vous n'avez rien trouvé ";
            texteResultat.innerText = "0/8";
            break
        
    } 
}
function couleur(tabBool) {
    for (let j = 0; j < tabBool.length; j++) {
        if(tabBool[j]===true){
            bloc[j].style.background = "lightgreen"
        }
        else{
            bloc[j].style.background = "#ffb8b8"
            bloc[j].classList.add('echec')

            setTimeout(()=>{
                bloc[j].classList.remove('echec')
            },500)
        }
        
    }
    
}
bloc.forEach(item =>{
    item.addEventListener("click", ()=>{
        item.style.background = "white"
    })
})



  
