/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5cd2a41a7c59b20001be8dda 

 this exercise has 3 distractions 

let removeExclamationMarks = (s) =>
  s
    .split('')
    .filter((e) => e != '!')
    .join('');

.split(''); // distraction
.filter((e) => e != '!'); // distraction
.join('') // distraction

*/

export let removeExclamationMarks = (s) => s.replace(/!/g, '');
