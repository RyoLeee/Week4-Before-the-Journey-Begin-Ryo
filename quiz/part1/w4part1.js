// SOAL 1

function sorting(arrNumber) {
  let newArr = [...arrNumber];
  return newArr;
}

function getTotal(arrNumber) {
  if (arrNumber.length <= 1) {
    return arrNumber;
  }
  let highers = arrNumber[0];
  let total = 0;
  for (let k = 1; k < arrNumber.length; k++) {
    if (highers <= arrNumber[k]) {
      highers = arrNumber[k];
    }
  }
  for (let j = 0; j < arrNumber.length; j++) {
    if (arrNumber[j] === highers) {
      total += 1;
    }
  }
  return `angka paling besar adalah ${highers} dan jumlah kemunculan sebanyak ${total} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 2
function changeVocals(str) {
  let result = ``;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if ("aiueoAIUEO".includes(ch)) {
      let newChar = String.fromCharCode(ch.charCodeAt(0) + 1);
      result += newChar;
    } else {
      result += ch;
    }
  }
  return result;
}

function reverseWord(str) {
  let result2 = str.split("").reverse().join("");
  return result2;
}

function setLowerUpperCase(str) {
  let copyWord = str.split(``);
  for (let k = 0; k < copyWord.length; k++) {
    let avbt = copyWord[k];
    if (avbt === avbt.toLowerCase()) {
      copyWord[k] = avbt.toUpperCase();
    } else {
      copyWord[k] = avbt.toUpperCase();
    }
  }
  return copyWord.join(``);
}

function removeSpaces(str) {
  let newWord = str.slice();
  let array = newWord.split(``);
  for (let l = 0; l < array.length; l++) {
    if (array[l] === ` `) {
      array.splice(l, 1);
      l--;
    }
  }
  return array.join(``);
}

function passwordGenerator(name) {
  if (name.length <= 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  let replaceVocals = changeVocals(name);
  let reverse = reverseWord(replaceVocals);
  let setUpLowCase = setLowerUpperCase(reverse);
  let spaceDelete = removeSpaces(setUpLowCase);
  return spaceDelete;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 3
function makanTerusRekursif(waktu) {
  if (waktu <= 0) {
    return 0;
  }
  return 1 + makanTerusRekursif(waktu - 15);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 4
function totalDigitRekursif(angka) {
  if (angka <= 10) {
    return angka;
  }
  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 5
function kaliTerusRekursif(angka) {
  if (angka <= 9) {
    return angka;
  }
  let digit = String(angka)
  let result = 1;

  for (let i = 0; i < digit.length; i++) {
    result *= Number(digit[i]);
  }
  return kaliTerusRekursif(result);
};

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6


