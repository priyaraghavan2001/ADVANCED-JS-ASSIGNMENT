/*Q.3. 
What will be the output of the following code?*/
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(Employee);
delete Emp1.company;
 Console.log(Emp1.company);

/*OUTPUT:
 Rohit*/