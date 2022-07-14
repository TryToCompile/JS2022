// solved Kata (distinct), 7kyu
function distinct(a) {
    let arr = [];
    a.forEach(el => {
      if (!arr.includes(el)) {
        arr.push(el);
      }
    });
    return arr;
  }
  console.log(distinct([1,1,2]));  // [1,2]
// end of Kata (distinct), 7kyu