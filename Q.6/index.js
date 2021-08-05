/*Q.6 How to delete 'Beethoven' from set?
const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
*/

//Ans:
const set = new Set(['Beethoven','Mozart','Chopin','Chopin']);
set.delete('Beethoven');
console.log(set);
/* OUTPUT:
Set { 'Mozart', 'Chopin' }*/