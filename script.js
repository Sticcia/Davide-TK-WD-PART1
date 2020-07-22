// Prevent default behaviour of submit button (refreshing page with GET request)
document.getElementById("form").addEventListener("click", function(event) {
	event.preventDefault();
});

// Add works to the layout, given the id and a boolean to hide on mobile
function addWork(workId, hide) {
	var xhttp = new XMLHttpRequest();
	var url = "https://reststop.randomhouse.com/resources/works/" + workId;

	xhttp.open("GET", url, true);
	xhttp.setRequestHeader('Accept', 'application/json');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			// Create a white-box for the work
			var div = document.createElement("div");
			div.className = "white-box center";
			// Make some of the works hidden on mobile
			if (hide) {
				div.className += " hide-sm";
			}
			document.getElementById("works").appendChild(div);
			// Add the title of the work to the box
			var p = document.createElement("p");
			p.textContent = response.titleweb;
			div.appendChild(p);
		}
	}
	xhttp.send();
}

// Search and add author to the layout, given first name and last name
function searchAuthor(firstName, lastName) {
	var xhttp = new XMLHttpRequest();
	var url = "https://reststop.randomhouse.com/resources/authors?firstName=" + firstName.value + "&lastName=" + lastName.value;

	// Clear content of works div before search
	document.getElementById("works").innerHTML = "";

	xhttp.open("GET", url, true);
	xhttp.setRequestHeader('Accept', 'application/json');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.responseText);
			// Check if the response is valid
			if (response.author !== undefined) {
				var count = 0;
				var author;
				// Loop all authors to find one with a description
				do {
					author = response.author[count];
					count++;
				} while (author.spotlight === undefined);
				// Add the author name
				document.getElementById("author").innerHTML = author.authordisplay;
				// Add a description of the author
				document.getElementById("spotlight").innerHTML = author.spotlight;
				// Create the title
				document.getElementById("worksTitle").innerHTML = "Works";
				// Loop the works array, retrieve and add each work info to the layout
				for (var i = 0; i < author.works.works.length && i < 50; i++) {
					addWork(author.works.works[i], i > 5);
				}
			} else {
				// Add author not found message
				document.getElementById("author").innerHTML = firstName.value + " " + lastName.value;
				document.getElementById("spotlight").innerHTML = "Author not found!";
			}
		}
	};
	xhttp.send();
}
