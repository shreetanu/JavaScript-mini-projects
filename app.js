const form = document.querySelector('#searchForm');
const div = document.querySelector('#movies');
form.addEventListener('submit', async function(e){
	try{
	e.preventDefault();
	const searchTerm = form.elements.query.value;
	const res = await axios.get(`http://api.tvmaze.com/search/shows?`,{params: { q: searchTerm} });
	makeImages(res.data);
	form.elements.query.value = '';
    }
    catch(e){
    	const h1 = document.createElement('h1');
        const text = "NO MOVIE";
        h1.appendChild(text);
        div.appendChild(h1);
    }
})

const makeImages = (shows)=>{
	while(div.hasChildNodes())
	{
		div.removeChild(div.firstChild);
	}
	for(let result of shows){
		if(result.show.image)
		{	const img = document.createElement('IMG');
	    	img.src =result.show.image.medium;
	     	div.append(img);
	     }
	}
}