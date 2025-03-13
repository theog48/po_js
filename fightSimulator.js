import { Personnage } from './class.personnage.js'
import {Armes} from './class.armes.js'


console.log('je suis dans le simulteur de combat')

let conanLeBarbare = new Personnage ('Conan le Barbare', '100', '5')
let merlinLenchanteuse = new Personnage ('Merlin L\'enchanteur', '50', '15')
console.log(conanLeBarbare, merlinLenchanteuse)
let epee = new Armes('Épée Légendaire', 'Melee', 'Neuf', 20); // Attaque +20
let arc = new Armes('Arc Mystique', 'Distance', 'Neuf', 15); // Attaque +15
let hache = new Armes('Hache de Guerre', 'Melee', 'Usée', 18); // Attaque +18

function activerCooldown(bouton, duree) {
    bouton.disabled = true;
    setTimeout(() => {
        bouton.disabled = false;
    }, duree * 1000);
}



document.getElementById("btnConan").addEventListener("click", function() {
    conanLeBarbare.attaquer(merlinLenchanteuse);
});

document.getElementById("btnMerlin").addEventListener("click", function() {
    merlinLenchanteuse.attaquer(conanLeBarbare);
});

document.getElementById("btnConanSpe").addEventListener("click", function() {
    conanLeBarbare.attaqueSpeciale(merlinLenchanteuse);
    activerCooldown(this, 15);
});

document.getElementById("btnMerlinSpe").addEventListener("click", function() {
    merlinLenchanteuse.attaqueSpeciale(conanLeBarbare);
    activerCooldown(this, 15);
});

document.getElementById("btnConanSoin").addEventListener("click", function() {
    conanLeBarbare.soigner();
    activerCooldown(this, 10)
});

document.getElementById("btnMerlinSoin").addEventListener("click", function() {
    merlinLenchanteuse.soigner();
    activerCooldown(this, 10)
});

 // Sélection des armes pour Conan
document.getElementById('btnArmeConan1').addEventListener('click', function() {
    conanLeBarbare.equiperArme(epee);
});
document.getElementById('btnArmeConan2').addEventListener('click', function() {
    conanLeBarbare.equiperArme(arc);
});
document.getElementById('btnArmeConan3').addEventListener('click', function() {
    conanLeBarbare.equiperArme(hache);
});

// Sélection des armes pour Merlin
document.getElementById('btnArmeMerlin1').addEventListener('click', function() {
    merlinLenchanteuse.equiperArme(epee);
});
document.getElementById('btnArmeMerlin2').addEventListener('click', function() {
    merlinLenchanteuse.equiperArme(arc);
});
document.getElementById('btnArmeMerlin3').addEventListener('click', function() {
    merlinLenchanteuse.equiperArme(hache);
});
