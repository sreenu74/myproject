var arr = [55, 2, 6, 8, 5, 2, 4, 9, 2, 6, 4, 2, 5];

Array.prototype.duplicatesInArray = function () {
	"use strict";
	var arr = this, resArrr = [];
	arr.forEach(function (item , i) {
		if (resArrr.indexOf(item) === -1) {
			resArrr.push(item);
		}
	});
	return resArrr;
};
var res = arr.duplicatesInArray();
console.log(res);


console.log(arr.duplicatesInArray());


/*var result = new Set(arr);
console.log(result);


var resFrom = Array.from(new Set(arr));
console.log(resFrom);*/