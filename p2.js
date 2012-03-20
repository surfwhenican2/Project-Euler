sum = 0
fibnum = 0

previous = 1
current = 2

while (current <= 4000000) {
	if (current % 2 == 0) {
		sum += current
	}
	fibnum = previous + current
	previous = current
	current = fibnum
}

console.log(sum)