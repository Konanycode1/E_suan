
class Student{

    constructor(props){
        this.id = props.id;
        this.nom = props.nom;
        this.prenom =props.prenom;
        this.niveau = props.niveau;
        this.numero = props.numero;
        this.pwd = props.pwd
    }

    setCreate(obj){
        let data = localStorage.getItem("student");
        data = JSON.parse(data);
        if(data == null){
            data = [];
            data.push(obj);
            localStorage.setItem("student", JSON.stringify(data));
        }
        else{
            data.push(obj);
            localStorage.setItem("student",JSON.stringify(data));
        }
    }
    getAdd(){
        let data = localStorage.getItem("student");
        data= JSON.parse(data);
        if(data == null){
            return []
        }
        else{
            return data
        }
    }
    getAddId(id){
        let  data = localStorage.getItem("student");
        data = JSON.parse(data);
        if(data == null){
            return []
        }
        else{
            return data.filter(item => item.id = id)
        }
    }
    updateStudent(id, obj){
        let data = localStorage.getItem("student");
        data = JSON.parse(data);
        if(data != null){
            let modif = data.map(item =>{
                if(item.id = id){
                    let mydata ={
                        id : item.id,
                        nom: obj.nom,
                        prenom:obj.prenom,
                        niveau: obj.niveau,
                        numero: obj.numero,
                        pwd: obj.pwd
                    }
                    return mydata
                }
                else return item
            })
            return modif
        }else return []

    }
    deleteStudent(id){
        let data = localStorage.getItem("student");
        data  = JSON.parse(data);
        if( data == null){
            return []
        }
        else{
            return data.filter((item)=> item.id != id)
        }
        
    }
}
