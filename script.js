	var addNewContact = document.getElementById("contactForm");


	addNewContact.addEventListener('submit', function(e){
		e.preventDefault();

		// Get all the input fields
		var fullName = document.getElementById("fullName").value;
		var phone = document.getElementById("phone").value;
		var address = document.getElementById("address").value;
		var email = document.getElementById("email").value;
		var addressBook = document.getElementById('myAdressBook');

		// create Elements 

		var contactDiv = document.createElement('div');
		var contactInfoDiv = document.createElement('div');
		var nameDiv = document.createElement('div');
		var phoneDiv = document.createElement('div');
		var addressDiv = document.createElement('div');
		var emailDiv = document.createElement('div');
		var buttonDiv = document.createElement('div');
		var editButton = document.createElement('button');
		var deleteButton = document.createElement('button');

		// Append newly created elements
		addressBook.appendChild(contactDiv);
		contactDiv.appendChild(contactInfoDiv);
		contactInfoDiv.appendChild(nameDiv);
		contactInfoDiv.appendChild(phoneDiv);
		contactInfoDiv.appendChild(addressDiv);
		contactInfoDiv.appendChild(emailDiv);
		contactDiv.appendChild(buttonDiv);
		buttonDiv.appendChild(editButton);
		buttonDiv.appendChild(deleteButton);

		//give the created elements contents
		contactDiv.setAttribute('class', 'contacts');
		nameDiv.textContent = `Name: ${fullName}`;
		phoneDiv.textContent = `Phone: ${phone}`;
		addressDiv.textContent = `Address: ${address}`;
		emailDiv.textContent = `Email: ${email}`;
		buttonDiv.setAttribute('id', 'buttons');
		editButton.textContent = 'Edit';
		deleteButton.textContent = 'Delete';
		deleteButton.setAttribute('class', 'delete');
		editButton.setAttribute('class', 'edit');



	});

	var delete_btn = document.querySelector("#myAdressBook");

	delete_btn.addEventListener('click', function(e){

		if (e.target.className === 'delete') {
			var delContact = e.target.parentElement.parentElement;

			delContact.parentNode.removeChild(delContact);
		} 

		if (e.target.className === 'edit') {
			var editSection = document.getElementsByClassName('editSection')[0];
			var contactInfo = e.target.parentElement.previousElementSibling.children;
			
			editSection.style.display = 'block';

			var editForm = document.forms['editForm'];

			var editName = editForm.children[0];
			var editPhone = editForm.children[1];
			var editAddress = editForm.children[2];
			var editEmail = editForm.children[3];

			editName.setAttribute('value', contactInfo[0].textContent);
			editPhone.setAttribute('value', contactInfo[1].textContent);
			editAddress.setAttribute('value', contactInfo[2].textContent);
			editEmail.setAttribute('value', contactInfo[3].textContent);

			editForm.addEventListener('submit', function(e){
				e.preventDefault();

				contactInfo[0].textContent = editName.value;
				contactInfo[1].textContent = editPhone.value;
				contactInfo[2].textContent = editAddress.value;
				contactInfo[3].textContent = editEmail.value;

				editSection.style.display = 'none';
			
			});

		}
	});

