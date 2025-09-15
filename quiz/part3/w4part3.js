// SOAL 1
function hapusSimbol(str) {
    return str.replace(/[^\w]/g, '');
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makanstr.match()
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 2
function cariPelaku(str) {
  let regex = /ABC/i;
  if (str.length < 3) {
    return 0;
  }
  if (regex.test(str.slice(0, 3))) {
    return 1 + cariPelaku(str.slice(3))
  } else {
    return cariPelaku(str.slice(1))
  }
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2