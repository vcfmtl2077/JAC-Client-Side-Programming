//variables
/*declaration of variables*/

//event listeners
/*declaration of event listeners*/

//functions
function LoggedOut() {
   /*switch from login to logout*/
   window.location.href = 'index.html';
   localStorage.removeItem("login");
}

function LoggedIn() {
   /*switch from logout to login*/
   window.location.href = 'menu.html';
   localStorage.setItem("login", true);
}

function DeleteCard(event) {
   /*delete a meal card*/
   var card = event.target.closest('.card');
   if (card) {
      card.remove();
   }
}

function AddCard(event) {
   /*function to add a new meal card*/
   event.preventDefault();

   var title = document.getElementById('title').value;
   var price = parseFloat(document.getElementById('price').value).toFixed(2);
   var description = document.getElementById('desc').value;
   if (isNaN(price) || price < 0) {
      alert("Please enter a valid price.");
      return;
   }

   var newCard = document.createElement('li');
   newCard.classList.add('card');
   newCard.innerHTML = `
      <div class="text">
          <h3 class="i-title">${title}</h3>
          <p class="i-description">${description}</p>
          <h3 class="i-price">$${price}</h3>
      </div>
      <div class="buttons">
          <button class="btn" onclick="DeleteCard(event)"><i class="fas fa-trash-alt"></i></button>
      </div>
  `;

   var cardList = document.querySelector('ul');
   cardList.appendChild(newCard);
   refreshBtnStyle();
}

function showForm() {
   document.getElementById("signupForm").style.display = "block";
}

function closeForm() {
   document.getElementById("signupForm").style.display = "none";
}

function submitForm() {
   alert("Sign Up Successfully! Please Login your account!");
   closeForm();
}

function refreshBtnStyle() {
   var loginStatus = localStorage.getItem("login");
   if (loginStatus) {
      var cardBtns = document.querySelectorAll('.card button');
      cardBtns.forEach(function (button) {
         button.style.display = 'flex';
      })
   }
}