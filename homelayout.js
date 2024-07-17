const menu = document.querySelector(".menu");
const content = document.querySelector(".tab");

menu.addEventListener("mouseover", () => {
  menu.style.width = "300px"; // Adjust the width as needed
  content.style.marginLeft = "300px";
});

menu.addEventListener("mouseout", () => {
  menu.style.width = "100px"; // Adjust the width as needed
  content.style.marginLeft = "100px";
});


let selectedMenuItem = null; // Keep track of the selected menu item

function selectMenuItem(menuItem) {
    // Reset the background of the previously selected menu item
    if (selectedMenuItem) {
        selectedMenuItem.classList.remove('selected');
    }

    // Set the background of the newly selected menu item
    menuItem.classList.add('selected');
    showContent(menuItem.getAttribute('data-text'));
    let BarTitle =document.getElementById("horizentalBarTitle");
   // show of add if in the home 
    if('Home' != menuItem.querySelector('p').innerHTML){
    document.querySelector("#addNoteBtn").style.display = 'none' ;
    
    }else{
        document.querySelector("#addNoteBtn").style.display = 'block' ;
        
    }
    BarTitle.innerHTML = menuItem.querySelector('p').innerHTML ;
    // Update the selectedMenuItem reference
    selectedMenuItem = menuItem;
}

// Initialize with the first menu item selected
selectMenuItem(document.querySelector('.menu ul li a.def-active'));


// Add click event listeners to the menu items
const menuItems = document.querySelectorAll('.menu ul li a');
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        selectMenuItem(menuItem);
    });
});

function showContent(sectionId) {
    // Hide all content sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
    
}

document.addEventListener("DOMContentLoaded", () => {
    // Get references to the add note elements
    const addNoteBtn = document.getElementById("addNoteBtn");
    const addNoteForm = document.getElementById("addNoteForm");
    const cancelBtn = document.getElementById("cancelBtn");

    // Event listener for the Add Note button
    addNoteBtn.addEventListener("click", () => {
        addNoteBtn.style.display = "none"; // Hide the add note button
        addNoteForm.style.display = "block"; // Display the add note form
    });

    // Event listener for the Cancel button
    cancelBtn.addEventListener("click", () => {
        addNoteForm.style.display = "none"; // Hide the add note form
        addNoteBtn.style.display = "block"; // Display the add note button
    });

    // Event listener for the add note form submission
    addNoteForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const noteContent = document.getElementById("noteContent").value;
        if (noteContent.trim() === "") {
            alert("Please enter a note.");
            return;
        }

        // Clear the input field
        document.getElementById("noteContent").value = "";

        // Add the new note to the DOM (example: appending to todoList)
        const todoList = document.getElementById('todoList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${noteContent}</span>
        `;
        todoList.appendChild(listItem);

        // Hide the add note form after adding the note
        addNoteForm.style.display = "none";
        addNoteBtn.style.display = "block"; // Display the add note button again
    });
});
