// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
  // if the color clicked on in the #palette, is not the #current-color, change the element background to the #current-color. But which element?

//And how do you change it? Do you set it? What is the actual function
  //do i need to do this separately for every color/box?


  //


// element.addEventListener("click", function(){
//   element.currentColor === 
// });

//div dot color says that it is picking only those divs wich also has the class of color
const clicky = document.querySelectorAll("div.color");
const currentShade = document.querySelector("#current-color")


clicky.forEach((element)=> {
  element.addEventListener("click", (event)=>{
    const newish=element.style.background  //saves background color of what we just clicked on to "newish"
    currentShade.style.background = newish
  });
})


//when you click on a cell, change it to the current color.
