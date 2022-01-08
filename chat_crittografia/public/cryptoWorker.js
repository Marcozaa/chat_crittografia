
/*
var messaggio =
  "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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


*/

var n, phi, p, q, e_pub, d;


function numberToString(num) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Split out each digit of the number:
  const digits = Math.floor(num).toString().split("").map(Number);

  // Then create a new string using the alphabet:
  return digits.reduce((str, digit) => {
    return str + alphabet[digit];
  }, "");
}




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
  

  function critta_chiavePubblica_destinatario(m,e_pub,n){
    c = modular_pow(m, e_pub, n);
    return c;
  }
  

  onmessage = function (e) {

    //console.log("e.data worker2 = " + e.data[0] + " CHIAVE OTHER = " + e.data[1]); 
  
  
    var messaggio = e.data[0];
    const separazioneSpazi = messaggio.split("");
    var messaggioCrittato = "";
    for (var i = 0; i < separazioneSpazi.length; i++) {
      for (var j = 0; j < separazioneSpazi[i].length; j++) {
        // Critta
        messaggioCrittato += String.fromCharCode(
          critta_chiavePubblica_destinatario(separazioneSpazi[i][j].charCodeAt(0), e.data[1][0], e.data[1][1])
          
        );
      }
    }
    
    /*
    for (var i = 0; i < separazioneSpazi.length; i++) {
      for (var j = 0; j < separazioneSpazi[i].length; j++) {
        // Decritta
        messaggioDecrittato += String.fromCharCode(
          decritta(critta(separazioneSpazi[i][j].charCodeAt(0)))
        );
      }
    }
    */
    
    //console.log("Message received from main script (crypted) " + messaggioCrittato);
    messaggioCrittato = messaggioCrittato
    self.postMessage(messaggioCrittato)
    
  };