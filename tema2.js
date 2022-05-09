/* Aici vine rezolvarea temei 2 */
const rezolvareaEsteAici = () => {
  console.log("Am rezolvat tema");
};

rezolvareaEsteAici();


console.log("------------------ex1-------------------");
// ex 1 

const number =[2];

function  ex (num){
if (num%number!=0){
    return num *number 

}else if (num % number === 0 ){
    return num - number
}

}
console.log(`acesat este raspunsul  ${ex(4)} iar ${ex(6)}`);
console.log("------------------ex2-------------------");
//ex 2

function svprimes(arr) {
    const prima = nn => {
        for (let i = 2; i < nn; i++) {
            if (nn % i === 0) return false;
        }
        return nn !== 1;
    }

let text = [0];

const svprimes = arr.filter(prima);
console.log(`acesta este primu  ${arr} `);
for (text; text < svprimes.length; text++) {
    console.log(svprimes[text]);
}

}
svprimes([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log("------------------ex3-------------------");
// ex:3
// Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola.
// Ex:
// saveStrings([1, ‘1’, ‘salut’, 2, 6, true, ‘true’]) -> [‘1’, ‘salut’, ‘true’]
// saveStrings([1,2,3,4]) -> []
// saveStrings([‘1’,’2’,’3’,’4’]) -> [‘1’,’2’,’3’,’4’]
const saveString =[1, "1", "salut", 2, 6, true, "true"];  
const coper=(convert) =>{
    const saveStrings = saveString.filter(convert => typeof convert == 'string');
    console.log(`originalu${saveString .join(" ,")}iar acesta este raspunsul`);
    saveStrings.forEach(convert => {
    console.log(convert)
})
}
coper(String);

console.log("------------------ex4-------------------");
let addDigits = (pfa) => {
  const nuber = [...pfa].map(x => parseInt(x));
let xero = 0

  for (let i = 0; i < nuber.length; i++) {
      if (nuber[i] % 2 === 0)
          continue;
      xero += nuber[i];
  }

  return xero;
}

console.log(`original('1523')=> ${addDigits('1523')}`);
console.log("====================ex5-========================")

let day;
switch (new Date().getDay()) {
  case 0:
    day = "ba imi dai o cafe ";
    break;
  case 1:
    day = "imi dai cafea";
    break;
  case 2:
    day = "buna imi dati o cafea";
    break;
  case 3:
    day = "buna ziua imi dait o cafea";
    break;
  case 4:
    day = "buna ziua imi dati va rog o cafea";
    break;
  case 5:
    day = "sarutmana imi puteti da va rog cafea";
  
}
console.log( day )
