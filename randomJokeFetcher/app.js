const jokes = document.querySelector('#jokes');
const addjoke = async ()=>{
	const text = await funtype();
	if (jokes.hasChildNodes()) {
     jokes.removeChild(jokes.childNodes[0]);
    }
	const newLI = document.createElement('LI');
	newLI.append(text);
	jokes.append(newLI);
	jokes.classList.add("newClass");
}

const funtype = async ()=> {
	try
	{const config = { headers: { Accept: 'application/json'} };
	const res = await axios.get('https://icanhazdadjoke.com/',config);
	return res.data.joke;
    }
    catch(e){
    	return "No JOKES AVAILABLE!";
    }
}

const button = document.querySelector('button')

button.addEventListener('click', addjoke);
