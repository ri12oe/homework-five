// 1. Change the text content of h1 element
const title = document.getElementById("title");
title.textContent = "DOM Manipulation";
console.log("h1 updated to: ", title.textContent); //debug check

// 2. Change the background color of the div with id to lightblue
const container = document.getElementById("container");
container.style.backgroundColor = "lightblue";

// 3. Add Item 7 to list
const list = document.querySelector("ul");
const item7 = document.createElement("li");
item7.textContent = "Item 7";
list.appendChild(item7);

// this will grab all the li elements so can loop through them
const listItems = document.querySelectorAll("li");
console.log("Number of list items after adding item 7: ", listItems.length); // should be 7

// Part 4-7. Loop through the list items and style specific ones based on postion
for (let i = 0; i < listItems.length; i++) {
    const itemNumber = i + 1;

    if (itemNumber === 1) {
        //4. first item should be crimson text
        listItems[i].style.color = "crimson";
    } else if (itemNumber === 3) {
        // 5. third item should have a pink background
        listItems[i].style.backgroundColor = "pink";
    } else if (itemNumber === 5) {
        // 6. fifth item should have a yellow background
        listItems[i].style.backgroundColor = "yellow";
    } else if (itemNumber === 7) {
        // 7. seventh item should have lightgrey background with royalblue text
        listItems[i].style.backgroundColor = "lightgray";
        listItems[i].style.color = "royalblue";
    }
}

// 8. Add an 8th item with the text of my name
const item8 = document.createElement("li");
item8.textContent = "Mario";
list.appendChild(item8);

// 9. Delete the fourth item

// this will re-select the list items since I just added item8 to the DOM
const updatedListItems = document.querySelectorAll("li");
for (let i = 0; i < updatedListItems.length; i++) {
    if (i + 1 === 4) {
        console.log("Removed item: ", updatedListItems[i].textContent); //debug check
        updatedListItems[i].remove();
        break;
    }
}

// 10. Wrap the button text in an italic element and style tyhe button
const btn = document.getElementById("btn");
const buttonText = btn.textContent; // grab the current text of the button
btn.textContent = ""; // make it empty

const italicText = document.createElement("i");
italicText.textContent = buttonText;
btn.appendChild(italicText);

btn.style.backgroundColor = "rebeccapurple";
btn.style.color = "white";
btn.style.border = "2px solid white";