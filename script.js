// complete the given function

function palindrome(str){
	str=str.split(" ").join("");
	str=str.totoLowerCase();
	let temp = str;
	for (let index = 0; index < str.length; index++) {
		if(str.charAt(index)!=str.charAt(str.length-1-index)){
			return false;
		}
			
	}
	return true;
}
module.exports = palindrome
