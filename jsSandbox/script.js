const distinctKataBtn = document.querySelector('.distinct-kata-btn'); 


distinctKataBtn.addEventListener('click', () => {
    let distinctKataPrompt = prompt('Enter a list of numbers with no separation:','123123123543241');
    alert(distinct(distinctKataPrompt.split('')));
});

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