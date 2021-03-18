let cartBody = document.getElementById('cart');
let inputCart = document.getElementById('cartFF');
window.addEventListener('click', (event) => {
	console.log('click');

	if(event.target.classList.contains('button-buy')){
		console.log('клік на кнопку');
		addItems(event.target);
	}
	if(event.target.classList.contains('delete-items')){
		console.log('клік на кнопку видалення товару');
		deleteItems(event.target);
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
addCartToForm(element.dataset.id);
M.toast({html: 'Товар у кошику', classes: 'rounded'});
}
function deleteItems(element){
	console.log('видалення товару')
	element.parentNode.remove();
}
function addCartToForm(id){
	inputCart.value += id + ", ";
}