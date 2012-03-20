//Find the difference between the sum of the squares of the first 100 natural numbers and the square of the sum.

//sum of the squares
squaresum = 0;
difference = 0;
natural = 100;


i = 1
while (i<natural+1){
	squaresum += i*i;
	i++;
}

sumsquare = 0;
sumnatural = 0;

j = 1;
while (j<natural+1){
	sumnatural += j;
	j++
}
sumsquare = sumnatural*sumnatural;

console.log("Sumed natural numbers to " + j);

difference = sumsquare - squaresum;

console.log("The difference between the square of the sum");
console.log("of the first 100 numbers and the sum of the squares is " + difference);