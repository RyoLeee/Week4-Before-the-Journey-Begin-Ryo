// SOAL PART 2 | SOAL 1
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  if (numberOfAttacks === 0) {
    return 0;
  }
  let every = attack(damagePerAttack);
  return every + damageCalculation(numberOfAttacks - 1, damagePerAttack);
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20

console.log(` `);
console.log(` `);
console.log(` `);

// SOAL 2
function meleeRangedGrouping(str) {
  if (str.length < 1) {
    return [];
  }
  let heroes = str.split(',');
  let [name, type] = heroes[0].split('-');
  let rest = meleeRangedGrouping(heroes.splice(1).join(','));
  if (rest.length === 0) {
    return rest = [[], []];
  }
  if (type === 'Ranged') {
    rest[0].push(name);
  } else if (type === 'Melee') {
    rest[1].push(name);
  }
  return rest
};

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
