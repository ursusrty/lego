let cartBody = document.getElementById('cart');
window.addEventListener('click', (event) => {
	console.log('click');

	if(event.target.classList.contains('button-buy')){
		console.log('клік на кнопку');
		addItems(event.target);
	}
});

function addItems(element){
console.log('');
let li = document.createElement('li');
li.innerHTML = element.dataset.img
             +element.dataset.name
             +element.dataset.price
             +'<div class="delete-items"> X </div>';
cartBody.appendChild(li);
}