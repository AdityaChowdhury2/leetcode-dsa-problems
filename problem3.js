// -----------Day 2-----------
/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

*/
var addBinary = function (a, b) {
	return (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2);
};

// console.log(
// 	addBinary("101", "11") //010111010101001110111100111010111010010110000001110110000000000000
// );

console.log(
	addBinary(
		"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
		"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
	) //010111010101001110111100111010111010010110000001110110000000000000
);
