export class Personnage{

    pseudo
    pointDeVie
    attaque

    constructor(pseudo, pointDeVie = 100, attaque = 5){
        this.pseudo = pseudo
        this.pointDeVie = pointDeVie
        this.attaque = attaque
        this.pvMax = pointDeVie
        this.probaCritique = 0.15;
        this.probaRaté = 0.05;
        this.arme = null;
    }

    verifierSante(){
        if(this.pointDeVie <=0){
            console.log("DOmmage je suis au sol")
        } else {
            console.log(this.pseudo + "a encore" + this.pointDeVie + "point de vie ! mais plus pour longtemps")
    }
}

//attaque un personnage
attaquer(adversaire){
    adversaire.pointDeVie -= this.attaque
    console.log(this.pseudo + 'attaque' + adversaire.pseudo + 'avec un violent coup de' + this.attaque)
    adversaire.verifierSante()
    if(Math.random() < this.probaCritique){
        console.log(`${this.pseudo} est critique et inflige ${this.attaque * 2} dégâts supplémentaires!`)
    } else if(Math.random() < this.probaRaté){
        console.log(`${this.pseudo} est raté et ne subit aucun dégât!`)
    }
}
attaqueSpeciale(adversaire) {
    let degats = this.attaque * 2; // Double des dégâts
    adversaire.pointDeVie -= degats;
    console.log(`${this.pseudo} utilise une ATTAQUE SPÉCIALE sur ${adversaire.pseudo} et inflige ${degats} dégâts !`);
    adversaire.verifierSante();
}
soigner() {
    let soin = 10; // Valeur de soin (modifiable)
    if (this.pointDeVie < this.pvMax) {
        this.pointDeVie += soin;
        if (this.pointDeVie > this.pvMax) {
            this.pointDeVie = this.pvMax; // Empêche de dépasser les PV max
        }
        console.log(`${this.pseudo} se soigne de ${soin} PV et a maintenant ${this.pointDeVie} PV.`);
    } else {
        console.log(`${this.pseudo} a déjà ses PV max et ne peut pas se soigner.`);
    }
}
equiperArme(arme) {
    this.arme = arme;
    this.attaque = this.arme.attaque; // Mise à jour des dégâts d'attaque en fonction de l'arme
    console.log(`${this.pseudo} a équipé l'arme : ${arme.nom}. Dégâts d'attaque : ${this.attaque}`);
}
} 


