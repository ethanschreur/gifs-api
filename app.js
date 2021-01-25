console.log("Let's get this party started!");
const form = document.addEventListener('submit', function(event) {
	event.preventDefault();
	submit();
});
async function submit() {
	let search = document.querySelector('input');
	const q = search.value;
	search.value = '';
	const api_key = 'HOvSxW6pRnBqZs61sfvsVy5dOJsT8go2';
	const limit = 1;
	const params = { api_key, q, limit };
	const data = await axios.get('https://api.giphy.com/v1/gifs/search', { params });
	console.log(data);
	let url = data.data.data[0].images.original.url;
	addGif(url);
}
function addGif(url) {
	let gifsdiv = document.querySelector('#gifs');
	let image = document.createElement('img');
	image.setAttribute('src', url);
	image.setAttribute('width', '300');
	gifsdiv.append(image);
}
const removeButton = document.querySelector('#remove');
removeButton.addEventListener('click', function() {
	let gifsdiv = document.querySelector('#gifs');
	gifsdiv.innerHTML = '';
});
