

const distinctKataBtn = document.querySelector('.distinct-kata-btn'); 


distinctKataBtn.addEventListener('click', () => {
    let distinctKataPrompt = prompt('Enter a list of numbers with no separation:','123123123543241');
    alert('Heey, this is your sorted array! -> ['+distinct(distinctKataPrompt.split('').sort())+']');
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



// Kata (array sum), 7kyu (no recursion)
function arraySum(arr) {
    return arr.flat().reduce((a,b) => a+b);
}
  console.log(arraySum([1, 2, [3, 4], 5])); // 15
// Kata (array sum), 7kyu (recursion)
function arraySumRecursion(arr){
    if(arr.length === 0) return 0;
    if(typeof arr[0] === 'number') return arr[0] + arraySumRecursion(arr.slice(1));
    if(typeof arr[0] === 'object') return arraySumRecursion(arr[0]) + arraySumRecursion(arr.slice(1));
}
// TODO: solve some issues with NaN in some unpredictable or non-standard situations
console.log(arraySumRecursion([1, 2, [1, 2],[3,[1, 2, 3, 5, 6, 7], 4],'str', 5])); // 
// end of Kata (array sum), 7kyu