function fib (i) {

	// base case
	// f(0) = f(1) = 1
	if (i == 0) return 1;
	if (i == 1) return 1;

	// recurse
	return fib (i-2) + fib (i-1);
}

console.log( fib (1) )