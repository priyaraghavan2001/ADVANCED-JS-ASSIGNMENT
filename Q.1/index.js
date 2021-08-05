/*Q.1. 
var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
How to fetch the millisecond according to universal time from a given Date object

Ans:
 The date.getUTCMilliseconds() method is used to fetch the millisecond according to universal time from a given Date object.*/

var dateobj =
   new Date('October 15, 1996 05:35:32:77 GMT+11:00');
   var B = dateobj.getUTCMilliseconds();
 
/*output:77*/