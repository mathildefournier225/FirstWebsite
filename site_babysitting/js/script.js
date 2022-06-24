
function maPosition(position) {

  document.getElementById("longitude").innerHTML = position.coords.longitude;
  document.getElementById("latitude").innerHTML = position.coords.latitude;
  
}

function peripherique(){
    if(window.innerHeight > window.innerWidth){
        document.getElementById("orientation").innerHTML = "portrait";
    }
    else{
        document.getElementById("orientation").innerHTML = "paysage";
    }
    if(navigator.userAgentData.mobile==true){
        document.getElementById("type").innerHTML = "mobile";
    }
    else{
        document.getElementById("type").innerHTML = "pc";
    }
        
}




function answer(){
    var counter = 0;
 
    if(document.getElementById("answer1").checked==true){
      counter+=1
  }
    if(document.getElementById("answer2").checked==true){
      counter+=1
  }
    if(document.getElementById("answer3").checked==true){
      counter+=1
  }
    if(document.getElementById("answer4").checked==true){
      counter+=1
  }
    if(document.getElementById("answer5").checked==true){
      counter+=1
  }
    if(document.getElementById("answer6").checked==true){
      counter+=1
  }
    if(document.getElementById("answer7").checked==true){
      counter+=1
  }
    if(document.getElementById("answer8").checked==true){
      counter+=1
  }
    if(document.getElementById("answer9").checked==true){
      counter+=1
  }
      if(document.getElementById("answer10").checked==true){
      counter+=1
  }
   return counter
}


function valider(){
    document.getElementById("resultat").innerHTML = answer();
 
    var reponse=answer()
   
    
    if (reponse==10){
        document.getElementById("commentaire").innerHTML = "Excellent, tu es un(e) babysitter au top !"
    }
    if (7<reponse<10){
        document.getElementById("commentaire").innerHTML = "Très bien, tu es prêt à être babysitter !"
    }
    if (4<reponse<8){
        document.getElementById("commentaire").innerHTML = "Bien, encore quelques petits efforts et tu seras un bon babysitter !"
    }
    if (reponse<5){
        document.getElementById("commentaire").innerHTML = "Attention, tu n'es pas encore prêt à être babysitter!"
    }
        
}

function disable() {
    document.getElementById("civilite").disabled=true;
    document.getElementById("nom").disabled=true;
    document.getElementById("prenom").disabled=true;
    document.getElementById("date").disabled=true;
    document.getElementById("ville").disabled=true;
    document.getElementById("mail").disabled=true;
    document.getElementById("tel").disabled=true;
    document.getElementById("motivation").disabled=true;
    document.getElementById("CV").disabled=true;
}
 function Notdisable() {
    document.getElementById("civilite").disabled=false;
    document.getElementById("nom").disabled=false;
    document.getElementById("prenom").disabled=false;
    document.getElementById("date").disabled=false;
    document.getElementById("ville").disabled=false;
    document.getElementById("mail").disabled=false;
    document.getElementById("tel").disabled=false;
    document.getElementById("motivation").disabled=false;
    document.getElementById("CV").disabled=false;
 }

