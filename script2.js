
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
	let addTxt = [];
	let d0 = document.getElementById("addTxt");
	let d1 = document.getElementById("addTxt1");
	let d2 = document.getElementById("addTxt2");
	addTxt.push(d0.value);
	addTxt.push(d1.value);
	addTxt.push(d2.value);
	// console.log(d0.value);
	let notes = localStorage.getItem("notes");
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	notesObj.push(addTxt);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addTxt.value = "";
	//   console.log(notesObj);
	showNotes();
});

// Function to show elements from localStorage
function showNotes() {
	let notes = localStorage.getItem("notes");
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	// notesObj.sort();

	let html = "";
	notesObj.forEach(function (element, index) {
		html +=
			`<tr class="noteCard"> 
      <td>${index + 1} </td>
      <td> <p>${element[0]}</p> </td>
      <td>${element[1]} </td>
	  <td>${element[2]} </td>
	  <td><button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button></td>
    </tr>
    `
	});
	let notesElm = document.getElementById("notes");
	if (notesObj.length != 0) {
		notesElm.innerHTML = html;
	} else {
		notesElm.innerHTML = `<br>Nothing to show! Use "Add a Contact" section above to add contact.`;
	}
}

// Function to delete a note
function deleteNote(index) {
	//   console.log("I am deleting", index);

	let notes = localStorage.getItem("notes");
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}

	notesObj.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	showNotes();
}
