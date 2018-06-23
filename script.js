//Déclaration de la fonction colorText avec comme argument color pour changer la couleur de la bordure.
function colorText(color) {
  //Récupération de la valeur de password pour changer sa couleur.
  document.getElementById('password').style.borderColor = color;
  //Récupération de la valeur confirmPassword pour changer sa couleur.
  document.getElementById('confirmPassword').style.borderColor = color;
}
//Déclaration de la fonction passwordTest.
function passwordTest(){
  //Récupération de la valeur de password.
  var password = document.getElementById('password').value;
  //Récupération de la valeur de confirmPassword.
  var confirmPassword = document.getElementById('confirmPassword').value;
  //Regex
  var regex = /^[a-zA-Z0-9àáâãäåçèéêëìíîïðòóôõöùúûüýÿœ.]+$/;
  //Application du regex sur password et confirmPassword
  if (regex.test(password) && regex.test(confirmPassword))
  //Si password et confirmPassword sont égaux, alors la couleur de la bordure sera verte.
    if (password == confirmPassword) {
      //Appel de la fonction colorText avec comme argument (color) pour changer la couleur de la bordure.
      colorText('green')
      //Apparition d'une boite de dialogue nous confirmant que les mots de passe sont valides.
      alert('Votre mot de passe est correct.');
    }
    //Sinon si les password et confirmPassword ne sont pas égaux
    else {
      //Appel de la fonction colorText avec comme argument (color) pour mettre la bordure en rouge.
      colorText('red')
      //Apparition d'une boite de dialogue nous confirmant que les mots de passes ne sont pas identiques.
      alert('La confirmation de votre mot de passe n\'est pas identique à votre mot de passe, veuillez réessayer.');
    }
    //Sinon si les variables ne sont pas égales ni accepté par le regex.
    else {
      //Apparition d'une boite de dialogue indiquant que des caractères ne sont pas valides.
      alert('Veuillez saisir des caractères valides pour la validation de votre mot de passe.');
    }
  }
