let heure_actuelle = new Date();
let jour = heure_actuelle.getDay();
let mois = heure_actuelle.getMonth();
let annee = heure_actuelle.getFullYear();
let heure = heure_actuelle.getHours();
let minutes = heure_actuelle.getMinutes();
let seconde = heure_actuelle.getSeconds();
let resultat = ("Date du jour : "+ jour + "/"+ mois + "/" + annee + " " + heure + "h " + minutes +"m " + seconde + "s");
document.getElementById("date").innerHTML = resultat;
