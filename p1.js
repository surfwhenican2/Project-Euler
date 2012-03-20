// comments are good

sum = 0

for (i = 0; i < 1000; i++) {
	if (i % 3 == 0) {
		sum += i
		//console.log("sum equals" + sum)
	} else if (i % 5 == 0) {
		sum += i
		//console.log("sum equals" + sum)
	}
}
console.log(sum)
