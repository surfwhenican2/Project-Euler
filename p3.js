//Find the largest prime factor of a number
//var number = 600851475143
//var number = 2;
var largestPrimeFactor;
var primeFactor;
var number = 2;

var largestPrimeFactorFunction = function(number){
	if (number = 0) largestPrimeFactor = 0;
	if (number = 1) largestPrimeFactor = 1;
	if (number = 2) largestPrimeFactor = 2;
	if (number = 3) largestPrimeFactor = 3;
	/*
	while (number % 2 = 0){
		number = number/2;
		largestPrimeFactor = 2;
		console.log("It is even so divide it by 2" +number);
	}

	for (i = 1; i <= number; i= i+2){
		if (number % i = 0) primeFactor = i;
		number = number/primeFactor;
		if (number==1) {
			largestPrimeFactor = primeFactor;
			console.log("the factor is greater that the largestPrimeFactor" +largestPriemFactor)			
		}
	}
	*/
return largestPrimeFactor;
}

var final = largestPrimeFactorFunction(number);
console.log("The Largest Prime Factor is " +final);

