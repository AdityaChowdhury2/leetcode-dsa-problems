var mostWordsFound = function (sentences) {
	let max = 0;
	const return1 = sentences.forEach((sentence) => {
		let sentenceLen = sentence.split(" ").length;

		sentenceLen > max ? (max = sentenceLen) : null;
	});
	return max;
};

console.log(
	mostWordsFound([
		"i think so too",
		"this is great thanks very much",
		"alice and bob love leetcode",
	])
);
