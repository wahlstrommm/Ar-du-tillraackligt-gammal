let age =document.getElementById("age");
//ålder


//kolla så knappen tar emot

let btn =document.getElementById("btn");

//texten som skrivs
let textP =document.createElement("p");

btn.addEventListener("click", function(){
    if( age.value < 18 ){ //för ung
        textP ="Du är för ung!"
        document.body.append(textP);

    }else if(18 == age.value ){ //Lika gammal
        textP ="Du är precis tillräckligt gammal";
        document.body.append(textP); //mellan 30 & 64

    }else if(age.value > 18 && age.value > 30 && age.value <= 64){
        textP ="Du är tillräckligt gammal och över 30 och under 64!"
        document.body.append(textP);//över 30 under 64!
    }
    else if(age.value > 18 && age.value <= 30){
        textP ="Du är tillräckligt gammal men under 30 eller precis fyllt 30!"
        document.body.append(textP);// under eller precis fyllt 30

    }else if(age.value >= 65){
        textP="Du har verkligen ålder inne! 65+";
        document.body.append(textP);//65+!
    }
})