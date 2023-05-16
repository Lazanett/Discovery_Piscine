const generateColor = () => {
  
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}
//math.floor = renvoie le plus petite entier (arrondi);
//math.random = genere un nombre compris entre {0 et 1};
//0xFFFFFF = plus grosse valeur hexadecimal (base 16 = 0123456789ABCDEF);
//toString = converti en chaine de caractere de base 16 (16) = code base decimal;

//document = site internet;
// element de la page qu'on veut cibler =>.body.style.background-color
// "#" (#pour debut de la couleur ex : #CD5C5C);