var obj1 = {"name":"Sam","class":"MCA"};
var obj2 = {"class":"MCA","name":"Sam"};
let key1=Object.keys(obj1);
let key2=Object.keys(obj2);
if(key1.length === key2.length) { 
		console.log("true"); 
	} else { 
		console.log("false"); 
	} 