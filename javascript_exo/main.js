/*
Créez une fonction qui prend un tableau de nombres et le renvoie si le chiffre 7 apparaît dans le tableau. Sinon, retournez ."Boom!""there is no 7 in the array"
*/

function sevenBoom(arr) {
  for (let num of arr) {
    if (num.toString().includes("7")) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}

/*
Le gars de l’assurance rit, il plaisante. Il a juste besoin d’une liste mise à jour. Vous avez juste besoin d’une de ces bouteilles de vodka Rammstein.

Étant donné un objet avec des boissons alcoolisées et un numéro, retournez une chaîne avec le nom de la bouteille Rammstein qui correspond au numéro donné.

let drink1 = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// number = 100

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// number = 50

{ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// number = 70

*/

function getVodkaBottle(obj, number) {
  let rammsteinBottles = Object.keys(obj).filter((bottle) =>
    bottle.includes("Rammstein")
  );
  for (let bottle of rammsteinBottles) {
    if (obj[bottle] === number) {
      return bottle;
    }
  }
  return "No matching Rammstein bottle found";
}

/*
Créez une fonction qui détermine si un nombre est impair ou pair. Un nombre est impair si la somme de tous ses chiffres est impaire, et un nombre est pair si la somme de tous ses chiffres est paire. Si un nombre est impair, renvoyez . Sinon, retournez ."Oddish""Evenish"

Par exemple, devrait renvoyer , puisque 1 + 2 + 1 = 4. devrait retourner , puisque 4 + 1 = 5.oddishOrEvenish(121)"Evenish"oddishOrEvenish(41)"Oddish"

Exemples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
*/

function oddishOrEvenish(number) {
  // separer les nombres et les transformer en tableau d'entier
  let elts = number.toString().split("");
  let eltsNumber = elts.map((x) => x * 1);

  const initialValue = 0;
  const sum = eltsNumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  // verifie si la somme  est pair ou impair
  if (sum % 2 === 0) {
    return "Evenish";
  }
  return "Oddish";
}

// console.log(oddishOrEvenish(121));

/*
Lorsque vous coloriez un motif rayé, vous pouvez commencer par colorier chaque carré séquentiellement, ce qui signifie que vous passez du temps à changer de crayon de couleur.

Créez une fonction où étant donné un tableau de couleurs, retournez le temps nécessaire pour colorer l’ensemble du motif. Notez les heures suivantes :cols

Il faut 1 seconde pour passer d’un crayon à l’autre.
Il faut 2 secondes pour colorer un carré.
Voir l’exemple ci-dessous pour plus de précisions.

color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
*/

function colorPatternTimes(cols) {
  const coloriage = 2;
  const changeCrayon = 1;
  let tpsCgtColoriage = 1;
  // Calcul du tps de coloriage
  const tpsColoriage = cols.length * coloriage;

  // Calcul du changement de crayon
  for (let i = 0; i < cols.length; i++) {
    if (cols[i] != cols[++i]) {
      tpsCgtColoriage++;
    }

    tpsTotal = tpsCgtColoriage + tpsColoriage;
  }

  return tpsTotal;
}

function colorPatternTimes(colors) {
  const tpsColoriage = 2; // Temps pour colorer un carré (en secondes)
  const tpsChangeCrayon = 1; // Temps pour changer de crayon (en secondes)

  const nbreColors = colors.length;
  const tpsTotalColoriage = nbreColors * tpsColoriage;
  const tpsTotalChangeCrayon = (nbreColors - 1) * tpsChangeCrayon;

  return timeToColorAllSquares + timeToSwitchPencils;
}
// console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]) )

/*
Créez une fonction qui prend deux dates et renvoie le nombre de jours entre la première et la deuxième date.

Exemples
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6


getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Dates may not all be in the same month/year.

*/

function getDays(date1, date2) {
  // nombre de milliseconde dans une journee
  const DayMilliseconde = 24 * 60 * 60 * 1000;

  // Recuperer les date sans les heures
  const day1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const day2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());

  // obtenir la differnce

  return (day2 - day1) / DayMilliseconde;
}

// console.log(

//   getDays(
//     new Date("June 14, 2019"),
//     new Date("June 20, 2019")
//   )
// )

/*
  Un tableau est dominant positif s’il contient strictement plus de valeurs positives uniques que de valeurs négatives uniques. Écrivez une fonction qui retourne si un tableau est dominant positivement.true

Exemples
isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
*/

function isPositiveDominant(tab) {
  let nbreP = 0;
  let nbreN = 0;
  const uniqueNumbers = [...new Set(tab)];
  for (const elt of uniqueNumbers) {
    if (elt > 0) {
      nbreP++;
    } else if (elt < 0) {
      nbreN++;
    }
  }
  return nbreP > nbreN;
}

// function isPositiveDominant(a) {
// 	const positives = new Set(a.filter(n => n > 0));
// 	const negatives = new Set(a.filter(n => n < 0));

// 	return positives.size > negatives.size;
// }

// console.log(isPositiveDominant([1, 0, 0, -1]));

/*
  Étant donné un tableau d’équations mathématiques (données sous forme de chaînes), renvoyer le pourcentage de réponses correctes sous forme de chaîne. Arrondir au nombre entier le plus proche.

Exemples
markMaths(["2+2=4", "3+2=5", "10-3=3", "5+5=10"]) ➞ "75%"
*/

function markMaths(tab) {
  // separation de l'équation
  let correctReponse = 0;
  for (const elt of tab) {
    const part = elt.split("=");
    const equation = part[0];
    const resultat = part[1];
    if (eval(equation) == resultat) {
      correctReponse++;
    }
  }
  // calcul du pourcentage
  const pourcentage = (correctReponse / tab.length) * 100 ;
  return `${pourcentage}%`
}
// console.log(markMaths(["1+1=-1", "2+1=-2", "2+1=-2", "1-1=-2", "1-2=1", "1-1=-1", "2-2=-2", "2+2=1", "2+1=-2", "1-2=0", "2+1=-2", "2-1=1", "2+2=-1", "1-2=-1", "1-2=0", "1-2=2"]))

/*
Créez une fonction de rotation à gauche et une fonction de rotation à droite qui renvoie toutes les rotations à gauche et à droite d’une chaîne.

Exemples
leftRotations("abc") ➞ ["abc", "bca", "cab"]

*/
// slice(0,2) -> copie a partir de la position  ]0,2] cad sa va copier elt 0 et elt 1
// slice(n) -> copie a partir de la position n

function leftRotations(str) {
  const rotations = [];
  const len = str.length;

  for (let i = 0; i < len; i++) {
    const rotation = str.slice(i) + str.slice(0, i);
    rotations.push(rotation);
  }

  return rotations;
}

function rightRotations(str){
  const rotations = []
  const len = str.length
  // cab
  for (let i = 0; i < str.length; i++) {
    const rotation = str.slice(-i) + str.slice(0,-i)
    rotations.push(rotation)
  }
  return rotations
}



/*
Étant donné une chaîne, inversez tous les mots qui ont une longueur impaire. Les mots de longueur paire ne sont pas modifiés.

Exemples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"
*/


function reverseOdd(str){
  
  const separeWords =  str.split(' ') // separer les mots
  let stockWords = []
  for (const elt of separeWords) {
    // verification la parité des mots
    if (elt.length % 2 == 0) {
      stockWords.push(elt)
    }else{
      const reversedWord = elt.split("").reverse().join(""); // Inverser le mot
      stockWords.push(reversedWord);
    }
  }
  return stockWords.join(' ') //jointure des mots separer par un espace

}


/*
Vous devez construire une architecture rudimentaire qui simulera un système de distribution de points XP entre deux étudiants qui résolvent une série de défis donnés sur Edabit.

Étape 1 : Créer une classe Challenge

Les paramètres du constructeur sont et . Le sera l’identifiant numérique du défi, et sera un code composé de deux lettres majuscules:idlevelidlevel

"VE" = « Très facile »
"EA" = « Facile »
"ME" = « Moyen »
"HA" = « Dur »
"VH" = « Très dur »
"EX" = « Expert »
Étape 2 : Créer une méthode pour la classe Challenge

Le nom de la méthode à l’intérieur de la classe est .Challengepoints()

La méthode doit restituer le nombre de points gagnés en résolvant un défi, en fonction du niveau du défi :

VE = 5 XP
EA = 10 XP
ME= 20 XP
HA= 40 XP
VH = 80 XP
EX = 120 XP
Étape 3 : Créer une classe User

Les paramètres du constructeur sont , et . Le sera, trivialement, le nom d’utilisateur. Le est l’accumulateur qui stocke les points XP gagnés. Le est une sorte de journal de l’utilisateur : est un tableau qui stockera les défis résolus par l’utilisateur.namexplognamexplogid

Étape 4 : Créer une méthode pour la classe User

Le nom de la méthode à implémenter dans la classe est et en tant que paramètre, il acceptera un objet de la classe.UsernewSolvedChallenge()Challenge

La méthode doit incrémenter le de l’utilisateur et stocker le défi dans le tableau.xpidlog

Étape 5 : Déclarer les instances nécessaires pour les tests

Maintenant que tout est prêt, vous devez définir l’exercice et déclarer les instances des classes créées, pour soutenir les tests effectués. Commencez par les déclarations des utilisateurs, ils sont deux:

user1 ➞ = « Madame » | = 0 | namexplog = []
user2 ➞ = « Steve » | = 0 | namexplog = []
Maintenant, déclarent les défis, ils sont six:

challenge1 ➞ = 1 | = « VE »;idlevel
challenge2 ➞ = 2 | = « EA »;idlevel
challenge3 ➞ = 3 | = « MOI »;idlevel
challenge4 ➞ = 4 | = « HA »;idlevel
challenge5 ➞ = 5 | = « VH »;idlevel
challenge6 ➞ = 6 | = « EX »;idlevel
Enfin, vous devez déclarer quels sont les défis résolus par les utilisateurs, en utilisant le setter que vous avez implémenté auparavant:

Madame résout les défis suivants, dans l’ordre:

challenge1 , , challenge4challenge6
Steve résout les défis suivants, dans l’ordre:

challenge5 , , challenge3challenge2
Étape 6 : Les mécanismes de test

Les tests vérifient si, après avoir appelé les propriétés et les méthodes de l’instance que vous avez créée, un résultat attendu est renvoyé. Ainsi, vous n’avez pas besoin de renvoyer un résultat, mais simplement d’être sûr que tout est défini conformément aux instructions.

Exemples
user1.name ➞ "Madam"

user2.xp ➞ 110
// Steve has solved challenges 5, 3 and 2 (80 + 20 + 10 points)

user1.log ➞ [1, 4, 6]
// Remember to respect the order given in Instructions for to store data into the log

challenge4.level ➞ "HA"

challenge3.id ➞ 3

challenge1.points ➞ 5
*/

class Challenge {
  constructor(id, level) {
    this.id = id;
    this.level = level;
  }

  points() {
    switch (this.level) {
      case 'VE':
        return 5;
      case 'EA':
        return 10;
      case 'ME':
        return 20;
      case 'HA':
        return 40;
      case 'VH':
        return 80;
      case 'EX':
        return 120;
      default:
        return 0;
    }
  }
}

class User {
  constructor(name, xp, log) {
    this.name = name;
    this.xp = xp;
    this.log = log;
  }

  newSolvedChallenge(challenge) {
    this.xp += challenge.points();
    this.log.push(challenge.id);
  }
}

// Declare users
const user1 = new User('Madam', 0, []);
const user2 = new User('Steve', 0, []);

// Declare challenges
const challenge1 = new Challenge(1, 'VE');
const challenge2 = new Challenge(2, 'EA');
const challenge3 = new Challenge(3, 'ME');
const challenge4 = new Challenge(4, 'HA');
const challenge5 = new Challenge(5, 'VH');
const challenge6 = new Challenge(6, 'EX');

// Solve challenges
user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);

user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);

// Testing
// console.log(user1.name); // Output: "Madam"
// console.log(user2.xp); // Output: 110
// console.log(user1.log); // Output: [1, 4, 6]
// console.log(challenge4.level); // Output: "HA"
// console.log(challenge3.id); // Output: 3
// console.log(challenge1.points()); // Output: 5


/*
Écrivez une fonction qui renvoie le multiple le moins commun (LCM) de deux entiers.

Exemples
lcm(9, 18) ➞ 18
*/

function lcm(a, b) {
  // Calculer le produit des deux entiers
  const product = a * b;

  // Trouver le plus grand des deux entiers
  const max = Math.max(a, b);

  // Parcourir les multiples du plus grand entier jusqu'au produit
  for (let i = max; i <= product; i += max) {
    // Vérifier si le multiple est divisible par les deux entiers
    if (i % a === 0 && i % b === 0) {
      return i; // Retourner le premier multiple commun trouvé
    }
  }

  return product; // Retourner le produit si aucun multiple commun n'est trouvé
}

// Exemple d'utilisation
// console.log(lcm(9, 18)); // Output: 18


/*
Étant donné qu’un objet contient le nombre de votes positifs et négatifs, renvoyez le nombre de votes à afficher. Ceci est calculé en soustrayant le nombre de votes négatifs des votes positifs.

Exemples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
*/

function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}


/*
Un nombre est dit Disarium si la somme de ses chiffres élevés à leurs positions respectives est le nombre lui-même.

Créez une fonction qui détermine si un nombre est un Disarium ou non.

Exemples
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32
*/ 




