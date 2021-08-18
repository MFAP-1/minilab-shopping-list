// Selecting elements
const inputTextElement = document.getElementById('inputText');
const addBtnElement = document.getElementById('add-btn');
const listElement = document.getElementById('ul');


// auxiliar methods:
function creatNewLi() {
    return `<li class="list-group-item d-flex justify-content-between">${inputTextElement.value} <button class="btn btn btn-danger">-</button></li>`;
}
function clearInputArea() {
    inputTextElement. value = '';
}


// Listener: tracking click on the 'add' btn. Will insert a new element in the list
addBtnElement.addEventListener('click', () => {
    // Creating a new HTML element for the inputed text
    const li = creatNewLi();
    // Adding this new element to the unorded list
    listElement.innerHTML += li;
    // Bonus: cleaning the input area
    clearInputArea();
});


// event delegation: tracking the click on the 'remove' btn
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-danger') ) { // if the click is on the 'remove btn':
        listElement.removeChild(event.target.parentElement); // remove that 'li' element from the ul
    }
});