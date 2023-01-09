// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

//The above code creates the grid of 100 squares. It also creates a way to reference "main". For each of those squares, a DIV is created

// You may write your code here!

// if the color clicked on in the #palette is not the #current-color, change the element background to the #current-color. But which element?

//And how do you change it? Do you set it? What is the actual function
//do i need to do this separately for every color/box?



//div dot color says that it is picking only those divs which also have the class of color
const clicky = document.querySelectorAll("div.color");
const currentShade = document.querySelector("#current-color");
const neo = document.querySelectorAll(".cell");
//const Jennifer = document.querySelector("#J");


clicky.forEach((element)=> {
  element.addEventListener("click", (event)=>{
    const newish=element.style.background;  
      //saves background color of what we just clicked on to "newish"
    currentShade.style.background = newish;
      //turns the current shade to whatever we just saved to "newish"
  });
});


//when you click on a cell, change it to the current color.
//use .forEach to interate through all the cells
//listen for the click
//if it clicks on a cell, change the background color of that cell to the current-color.

neo.forEach((cells)=> {
  cells.addEventListener("click",(event)=>{
    cells.style.background = currentShade.style.background;
    });
});

//clear the board

//const clearBoard = document.querySelector("#clear-board");
//should clearBoard be createElement? That is how Jinseok did it.
const clearBoard = document.createElement("button");
clearBoard.textContent= "Clear Board";

//need to iterate this. 
neo.forEach((cells) => {
  clearBoard.addEventListener("click", (event) => {
    for (let cell of cells) {
      cells.style.background = "";  
  }
  currentShade.style.background = "";
})});


//didn't realized I needed a new Div.
const newDiv = document.createElement("div");
currentShade.after(newDiv);
newDiv.append(clearBoard); //what does this append to?




