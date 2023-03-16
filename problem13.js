var subtractProductAndSum = function (n) {
	let sum = 0;
	let product = 1;
	while (n) {
		sum = sum + (n % 10);
		product = product * (n % 10);
		n = parseInt(n / 10);
	}
	return Math.abs(product - sum);
};

console.log(subtractProductAndSum(234));
