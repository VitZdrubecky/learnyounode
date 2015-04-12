var sum = 0;

process.argv.forEach(function(value, index){
	if (index > 1)
		sum += Number(value);
});

console.log(sum);