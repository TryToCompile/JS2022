

const distinctKataBtn = document.querySelector('.distinct-kata-btn'); 
const arraySumBtn = document.querySelector('.arraySum-kata-btn');

distinctKataBtn.addEventListener('click', () => {
    let distinctKataPrompt = prompt('Enter a list of numbers with no separation:','123123123543241');
    alert('Heey, this is your sorted array! -> ['+distinct(distinctKataPrompt.split('').sort())+']');
});

arraySumBtn.addEventListener('click', () => {
    let arraySumPrompt = prompt('Enter a list of numbers/strings/chars with no separation:','123123123543241');
    arraySumPrompt = arraySumPrompt.split('').map(Number);
    alert('Heey, this is your sum! -> '+arraySumRecursion(arraySumPrompt));
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
//  console.log(distinct([1,1,2]));  // [1,2]
// end of Kata (distinct), 7kyu 



// Kata (array sum), 7kyu (no recursion)
function arraySum(arr) {
    return arr.flat().reduce((a,b) => a+b);
}
// TODO: Check if reduce is slower than typical for loop 
  //console.log(arraySum([1, 2, [3, 4], 5])); // 15
// Kata (array sum), 7kyu (recursion)
function arraySumRecursion(arr){
    if(arr.length === 0) return 0;
    if(typeof arr[0] === 'number') return arr[0] + arraySumRecursion(arr.slice(1));
    if(typeof arr[0] === 'object') return arraySumRecursion(arr[0]) + arraySumRecursion(arr.slice(1));
    if(typeof arr[0] !== 'number' || typeof arr[0] !=='object') return arraySumRecursion(arr.slice(1));
}
// TODO:  Refactor, dont works with strings like 1234asd
//console.log(arraySumRecursion([1, 2, [1, 2],[3,[1, 2, 3, 5, 6, 7], 4],'str', 5])); // 
// end of Kata (array sum), 7kyu


// Kata (findodd) 6 kyu
function findOdd (A){
  for (let i = 0; i < A.length; i++) {
    let arr = A.filter((n) => {
        return n == A[i];
    });
    if (arr.length % 2 != 0){
       return arr[0];
    }
  }
  return 0;
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
// end of Kata findodd, 6kyu


//start if Kata extract the domain name from URL, 5kyu
function domainName(url){
  let tempStr = url.replace('https://','').replace('http://','').replace('www.','').replace('ftp://','').split('.');
  return tempStr[0].toString();
}
console.log(domainName("https://google.co.jp"));
console.log(domainName("www.xaker.ru"));
// end of Kata extract the domain name from URL, 5kyu