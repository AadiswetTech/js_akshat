const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","batman","flash"]
const super_kids=["rudra","bhim","patlu"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);


// const heroes=marvel_heroes.concat(dc_heroes);
// console.log(heroes)

//spread operator
 const newhero=[...marvel_heroes,...dc_heroes,...super_kids];
console.log(newhero)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array=another_array.flat(Infinity);
console.log(real_array);
