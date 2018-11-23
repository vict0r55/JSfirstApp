function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя двадцать первая программа!");

	function showSkills() {
		let skills = [
		"html",
		"css",
		"js",
		"php",
		"java",
		"xml"
		];
		console.log(skills);
	}

	function checkAge(){
		if (age >= 18) {
			console.log('Вы можете смотреть "интересные" видео ;)');
		} else {
			console.log('Вы еще не можете смотреть "интересные" видео!');
		}
	}

	function calcPow(num) {
		num *= 2;
		console.log(num);
	}

	showSkills();
	checkAge();
	calcPow(4);
}

myFirstApp("Victor", 20);