var letterCapitalize = function(string){
	
	var splitString = string.split('');
	
	var upCased = splitString[0].toUpperCase()

	splitString.splice(0, 1, upCased);


	// console.log(splitString);

	



		


		

		for (var i=0; i<splitString.length-1; i++) {
				if (splitString[i] === ' ') {
					var splitCap = splitString[i+1].toUpperCase();
					var capReplaced = splitString.splice((i+1),1,splitCap);
					// console.log(splitString);

			}
		}
	
	return splitString.join('');
	
}


console.log(letterCapitalize('hella world yo'));