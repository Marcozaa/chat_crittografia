var numeriPrimi = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317
];

/*

var messaggio =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const separazioneSpazi = messaggio.split(" ");
var messaggioCrittato = "";
var messaggioDecrittato = "";
for (var i = 0; i < separazioneSpazi.length; i++) {
  for (var j = 0; j < separazioneSpazi[i].length; j++) {
    // Critta
    messaggioCrittato += String.fromCharCode(
      critta(separazioneSpazi[i][j].charCodeAt(0))
    );
  }
}

for (var i = 0; i < separazioneSpazi.length; i++) {
  for (var j = 0; j < separazioneSpazi[i].length; j++) {
    // Decritta
    messaggioDecrittato += String.fromCharCode(
      decritta(critta(separazioneSpazi[i][j].charCodeAt(0)))
    );
  }
}

console.log("messaggio crittato: " + messaggioCrittato);
console.log("messaggio decrittato: " + messaggioDecrittato);



console.log("Messaggio crittografato " + critta(12302));
console.log("Messaggio decrittato " + decritta(critta(12302)));


function numberToString(num) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Split out each digit of the number:
  const digits = Math.floor(num).toString().split("").map(Number);

  // Then create a new string using the alphabet:
  return digits.reduce((str, digit) => {
    return str + alphabet[digit];
  }, "");
}

/**
 * 
 * -----FORMULA D---------
 * For people who are wondering what happened at 11:14 
The private key d is derived from the following formula:
d = (k*Φ(n) + 1) / e for some integer k

At step 5 instead of doing what Eddie did, I'd suggest for you to use this formula instead which is basically the same thing.
The little trick here is that k has to be such an integer, that k*Φ(n) + 1%e=0
(% stands for the mathematical mod)

So let us try and find k for the above example where Φ(n)=6 and e=5
if k=1,  1*6+1%e = 2
if k=2,  2*6+1%e = 3
if k=3,  3*6+1%e = 4
if k=4,  4*6+1%e = 0
if k=5,  5*6+1%e = 1
if k=6,  6*6+1%e = 2
if k=7,  7*6+1%e = 3
if k=8,  8*6+1%e = 4
if k=9,  9*6+1%e = 0
So k=9 is our answer. Notice that we did not stop at k=4, because that would give us d=5
and the idea here is that d and e cannot be the same.
Hence, for k=9
d = (k*Φ(n) + 1) / e = 11.





// calcolo potenza modulare ((m^exp % mod)m^exp % mod)....
function modular_pow(base, exponent, modulus) {
  if (modulus === 1) return 0;
  var result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1)
      //odd number
      result = (result * base) % modulus;
    exponent = exponent >> 1; //divide by 2
    base = (base * base) % modulus;
  }
  return result;
}

var messaggioCrittato;

function critta(m) {
  c = modular_pow(m, e_pub, n);
  return c;
}

function critta_chiavePubblica_destinatario(m,e_pub,n){
  c = modular_pow(m, e_pub, n);
  return c;
}

function decritta(m) {
  m2 = modular_pow(m, d, n);
  return m2;
}

onmessage = function (e) {
  //console.log("e.data " + e.data[0]+ " chiave " + e.data[1][0]);


  var messaggio = e.data[0];
  const separazioneSpazi = messaggio.split(" ");
  var messaggioCrittato = "";
  var messaggioDecrittato = "";
  for (var i = 0; i < separazioneSpazi.length; i++) {
    for (var j = 0; j < separazioneSpazi[i].length; j++) {
      // Critta
      messaggioCrittato += String.fromCharCode(
        critta_chiavePubblica_destinatario(separazioneSpazi[i][j].charCodeAt(0), e.data[1][0], e.data[1][1])
      );
    }
  }
  
  for (var i = 0; i < separazioneSpazi.length; i++) {
    for (var j = 0; j < separazioneSpazi[i].length; j++) {
      // Decritta
      messaggioDecrittato += String.fromCharCode(
        decritta(critta(separazioneSpazi[i][j].charCodeAt(0)))
      );
    }
  }
  
  //console.log("Message received from main script (crypted) " + messaggioCrittato );
  //console.log("Crypt con e_pub: " + e_pub + " N: " + n);
  //console.log("Decrypt con d: " + d + " N: " + n)
  //console.log( "Message received from main script (decrypted) " + messaggioDecrittato );
  messaggioCrittato = messaggioCrittato
  
};

 */



var n, phi, p, q, e_pub, d;

var i = 0;
while (numeriPrimi[i] != null) {
  i++;
}
var p, q;
while (p == q) {
  p = numeriPrimi[Math.floor(Math.random() * i)]; // Primo numero primo
  q = numeriPrimi[Math.floor(Math.random() * i)]; // Secondo numero primo
}

var n = p * q;
var phi = (p - 1) * (q - 1);
var e_pub = trova_e();

d = trova_d();


function trova_e() {
  for (var i = 2; i <= phi; i++) {
    if (gcd_rec(i, phi) == 1) {
      return i;
    }
  }
}


function trova_d() {
  var d = 0.2;
  var k = 1;
  while (d != 0) {
    d = (k * phi + 1) % e_pub;
    k++;
  }
  k -= 1;
  d = (k * phi + 1) / e_pub;

  if (d == e_pub) {
    k++;
    while (d != 0) {
      d = (k * phi + 1) % e_pub;
      k++;
    }
    k -= 1;
    return (d = (k * phi + 1) / e_pub);
  } else {
    return (d = (k * phi + 1) / e_pub);
  }
}

//console.log("E_PUB: " + e_pub);
//console.log("Chiave privata(" + d + "," + n + ")");
//console.log("Chiave pubblica(" + e_pub + "," + n + ")");

function gcd_rec(a, b) {
  if (b) {
    return gcd_rec(b, a % b);
  } else {
    return Math.abs(a);
  }
}
/**
 * CHIAVE PRIVATA (D,N)
 * CHIAVE PUBBLICA (E,N)
 *
 * Messaggio crittografato = ( messaggio_in_chiaro ^ e ) mod n
 * Messaggio decrittografato = ( messaggio_crittografato ^ d ) mod n
 */

self.addEventListener(
  "message",
  function (e) {
    self.postMessage(q);
    self.postMessage(p);
    self.postMessage(n);
    self.postMessage(phi);
    self.postMessage(e_pub);
    self.postMessage(d);
  },
  false
);
