var main = function () {
	"use strict";

	function fizzbuzz_1() {
		for (var i = 1; i <= 100; i++) {		
			var newParagraph = $("<p>");

			if (i % 3 === 0 && i % 5 === 0) {
				newParagraph.text("FizzBuzz");
			}
			else if (i % 3 === 0) {
				newParagraph.text("Fizz");
			}
			else if (i % 5 === 0) {
				newParagraph.text("Buzz");
			}
			else{
				newParagraph.text(i);
			}
			$("#fizzbuzz_1").append(newParagraph);
		}
	}

	function fizzbuzz_2(start, end) {
		for (var i = start; i <= end; i++) {
			var newParagraph = $("<p>");

			if (i % 3 === 0 && i % 5 === 0) {
				newParagraph.text("FizzBuzz");
			}
			else if (i % 3 === 0) {
				newParagraph.text("Fizz");
			}
			else if (i % 5 === 0) {
				newParagraph.text("Buzz");
			}
			else{
				newParagraph.text(i);
			}
			$("#fizzbuzz_2").append(newParagraph);
		}
	}

	function fizzbuzz_3(arr) {
		for (var i = 0; i <= arr.length - 1; i++) {
			var newParagraph = $("<p>");

			if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
				newParagraph.text("FizzBuzz");
			}
			else if (arr[i] % 3 === 0) {
				newParagraph.text("Fizz");
			}
			else if (arr[i] % 5 === 0) {
				newParagraph.text("Buzz");
			}
			else{
				newParagraph.text(arr[i]);
			}
			$("#fizzbuzz_3").append(newParagraph);
		}
	}

	function fizzbuzz_4(obj) {
		for (var i = 1; i <= 100; i++) {
			var newParagraph = $("<p>");

			if (i % 3 === 0 && i % 5 === 0) {
				newParagraph.text(obj.divisibleByThree + obj.divisibleByFive);
			}
			else if (i % 3 === 0) {
				newParagraph.text(obj.divisibleByThree);
			}
			else if (i % 5 === 0) {
				newParagraph.text(obj.divisibleByFive);
			}
			else{
				newParagraph.text(i);
			}
			$("#fizzbuzz_4").append(newParagraph);
		}
	}

	function fizzbuzz_5(arr, obj) {
		for (var i = 0; i <= arr.length - 1; i++) {
			var newParagraph = $("<p>");

			if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
				newParagraph.text(obj.divisibleByThree + obj.divisibleByFive);
			}
			else if (arr[i] % 3 === 0) {
				newParagraph.text(obj.divisibleByThree);
			}
			else if (arr[i] % 5 === 0) {
				newParagraph.text(obj.divisibleByFive);
			}
			else{
				newParagraph.text(arr[i]);
			}
			$("#fizzbuzz_5").append(newParagraph);
		}
	}

	fizzbuzz_1();
	fizzbuzz_2(200, 300);
	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
	fizzbuzz_4({ divisibleByThree: "foo", divisibleByFive: "bar"});
	fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], { divisibleByThree: "foo", divisibleByFive: "bar"});
};

$(document).ready(main);