/*begin
You have 100 cats (You are quite lucky to own so many cats!).

You have arranged all your cats in a line. Initially, none of your
cats have any hats. You take 100 rounds walking around the cats,
always starting with the first cat. Every time you stop at a cat,
you put a hat on it if it doesn't have one, and you take its
hat off if it has one on.

The first round, you stop at every cat. The second round, you only
stop at every 2nd cat (#2, #4, #6, #8, etc.). The third round, you
only stop at every 3rd cat (#3, #6, #9, #12, etc.). You continue this
process until the 100th round (i.e. you only visit the 100th cat).

Write a program that prints which cats have hats at the end.
*/

// set up array of 100 cats with no hats
var i = 0;
var cats = [];

while(i < 100) {
 cats = "no";
 i += 1;
}

//Organize array of 100 cats with or without hats
var round = 1
var count = 0
while (round <= 100) {
 while (count < 100) {
  if ( (count + 1) % round == 0) {
   if (cats[count] == "no") {
    cats[count] = "yes"
   }else {
    cats[count] = "no"
   }
  }
  count += 1
 }
 round += 1
}

//Store cats with hat in a new array
a = 0;
cathat = [];
while(a < 100)
 if (cats[a] == "yes") {
  cathat << a;
 }
 a += 1;
}

//print an array of cats with hat
document.write(cathat);