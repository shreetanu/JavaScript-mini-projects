var colors= generateRandomColors(6);

    var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor(); //to randomly choose a color
    var colorDislay = document.getElementById("colorDislay");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var resetButton = document.querySelector("#reset");
    colorDisplay.textContent = pickedColor;
    resetButton.addEventListener("click", function(){
             	//generate all new colors
    	colors = generateRandomColors(6);
    	//pick a new random color from arra
    	pickedColor = pickColor();
    	//change colorDisplay to match picked color
    	//colorDislay.textContent = pickedColor;
    	colorDislay.textContent = pickedColor;
      });

    for(var i=0; i < squares.length; i++)
    {
    	//add initial colors to squares
    	squares[i].style.backgroundColor = colors[i];

    	//add click listeners to squares
    	squares[i].addEventListener("click",function(){
    		//grab color of clicked square
    		var clickedColor= this.style.backgroundColor;          //this refers to the particular object
    		//compare color to pickedColor
    		if(clickedColor === pickedColor){
    			messageDisplay.textContent = "Correct!";
    			changeColors(clickedColor);
    			h1.style.backgroundColor = clickedColor;
    		}
    		else{
    			//fades out the wrong choosed colors
    			this.style.backgroundColor = "#232323";
    			messageDisplay.textContent = "Try Again";
    		}
    	});
    }

    function changeColors(color){
    	//loop through all squares
    	for(var i =0; i< squares.length; i++)
    	{
    		//chage each color to match given color
    		squares[i].style.backgroundColor = color;
    	}
    }
   function pickColor()
    {
    	var random = Math.floor(Math.random() * colors.length);
    	return colors[random];
    }
    
    function generateRandomColors(num){
    	//make an array
    	var arr= [];
    	//add num random colors to array
    	for(var i=0; i < num; i++){
    		//get random colors and push into array
    		arr.push(randomColor());
    	}
    	//return that array
    	return arr;
    }

    function randomColor(){
    	//pick a "red"from 0-255
    	var r = Math.floor(Math.random() * 256);
    	//pick a "green"from 0-255
    	var g = Math.floor(Math.random() * 256);
    	//pick a "blue"from 0-255
    	var b = Math.floor(Math.random() * 256);
    	//"rgb(r, g, b)"
    	return "rgb(" + r + ", " + g + ", " + b + ")";
    }
