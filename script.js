var today = new Date();
var nowTime = today.getHours();
var greeting;

if (nowTime > 18) {
	greeting = 'Good Evening!';
} else if (nowTime > 12) {
	greeting = 'Good Afternoon!';
} else if (nowTime > 0) {
	greeting = 'Good Morning!';
} else {
	greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3');
