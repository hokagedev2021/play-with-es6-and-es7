function nomComplet(prenom, nom = 'SARE') {
  console.log(nom + ' ' + prenom);
}

function nomPrenomComplet(prenom, nom = prenom) {
  console.log(nom + ' ' + prenom);
}

nomPrenomComplet('Samadou');

// Tous les paramètres obligatoires puis les paramètres normaux
