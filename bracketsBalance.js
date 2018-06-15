function bracketsBalance(str) {
    let string;
    if (bracketsBalance.caller == bracketsBalance) {
      string = str;
    } else {
      string = str.split('').filter(el => el == '[' || el == ']' || el == '{' || el =='}' || el == '(' || el == ')').join('');
    }
    const strLength = string.length;
	if (!string.length) {
		return true;
	}
	if (string.length > 1 && (string.indexOf('(') == 0 && string.lastIndexOf(')') == strLength - 1 || string.indexOf('[') == 0 && string.lastIndexOf(']') == strLength - 1 || string.indexOf('{') == 0 && string.lastIndexOf('}') == strLength - 1)) {
		const str = string.slice(1, string.length - 1);
		return bracketsBalance(str);
    } 
    return false;	
}
