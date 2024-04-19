
// Hamburger Menu
const hamburgerMenu = document.querySelector('#hamburger-menu');
const dropdownMenu = document.querySelector('#dropdown-menu');
const dropDownHidden = document.querySelectorAll('#dropDownMenu');
const downloadCVbtn = document.getElementById("downloadBTN");
const body = document.querySelector("body");

// Hamburger menu
hamburgerMenu.addEventListener("click", ()=> {
    dropdownMenu.classList.toggle("hidden");
    downloadCVbtn.classList.toggle("hidden");
});

// to hide dropdown menu after clicking one of the options
dropDownHidden.forEach(Link=>{
    Link.addEventListener("click", ()=>{
        dropdownMenu.classList.toggle("hidden");
        // the bg remains white after one of the options are clicked and menu is opened again
        hamburgerMenu.classList.toggle('bg-white');
    })
});


// Read more and Read less button
// Block1
const moreTextEl_block1 = document.getElementById('more_text_block1');
const toggleBtnEl_block1 = document.getElementById('toggle-btn_block1');
const hideBtnEl_block1 = document.getElementById('hide-btn_block1');

toggleBtnEl_block1.addEventListener('click', () => {
    moreTextEl_block1.classList.toggle('hidden');
    toggleBtnEl_block1.classList.toggle('hidden');
    hideBtnEl_block1.classList.toggle('hidden');
});

hideBtnEl_block1.addEventListener('click', () => {
    moreTextEl_block1.classList.toggle('hidden');
    toggleBtnEl_block1.classList.toggle('hidden');
    hideBtnEl_block1.classList.toggle('hidden');
});

// Block2
const moreTextEl_block2 = document.getElementById('more_text_block2');
const toggleBtnEl_block2 = document.getElementById('toggle-btn_block2');
const hideBtnEl_block2 = document.getElementById('hide-btn_block2');

toggleBtnEl_block2.addEventListener('click', () => {
    moreTextEl_block2.classList.toggle('hidden');
    toggleBtnEl_block2.classList.toggle('hidden');
    hideBtnEl_block2.classList.toggle('hidden');
});

hideBtnEl_block2.addEventListener('click', () => {
    moreTextEl_block2.classList.toggle('hidden');
    toggleBtnEl_block2.classList.toggle('hidden');
    hideBtnEl_block2.classList.toggle('hidden');
});

// Block3
const moreTextEl_block3 = document.getElementById('more_text_block3');
const toggleBtnEl_block3 = document.getElementById('toggle-btn_block3');
const hideBtnEl_block3 = document.getElementById('hide-btn_block3');

toggleBtnEl_block3.addEventListener('click', () => {
    moreTextEl_block3.classList.toggle('hidden');
    toggleBtnEl_block3.classList.toggle('hidden');
    hideBtnEl_block3.classList.toggle('hidden');
});

hideBtnEl_block3.addEventListener('click', () => {
    moreTextEl_block3.classList.toggle('hidden');
    toggleBtnEl_block3.classList.toggle('hidden');
    hideBtnEl_block3.classList.toggle('hidden');
});

// Block4
const moreTextEl_block4 = document.getElementById('more_text_block4');
const toggleBtnEl_block4 = document.getElementById('toggle-btn_block4');
const hideBtnEl_block4 = document.getElementById('hide-btn_block4');

toggleBtnEl_block4.addEventListener('click', () => {
    moreTextEl_block4.classList.toggle('hidden');
    toggleBtnEl_block4.classList.toggle('hidden');
    hideBtnEl_block4.classList.toggle('hidden');
});

hideBtnEl_block4.addEventListener('click', () => {
    moreTextEl_block4.classList.toggle('hidden');
    toggleBtnEl_block4.classList.toggle('hidden');
    hideBtnEl_block4.classList.toggle('hidden');
});

// Block5
const moreTextEl_block5 = document.getElementById('more_text_block5');
const toggleBtnEl_block5 = document.getElementById('toggle-btn_block5');
const hideBtnEl_block5 = document.getElementById('hide-btn_block5');

toggleBtnEl_block5.addEventListener('click', () => {
    moreTextEl_block5.classList.toggle('hidden');
    toggleBtnEl_block5.classList.toggle('hidden');
    hideBtnEl_block5.classList.toggle('hidden');
});

hideBtnEl_block5.addEventListener('click', () => {
    moreTextEl_block5.classList.toggle('hidden');
    toggleBtnEl_block5.classList.toggle('hidden');
    hideBtnEl_block5.classList.toggle('hidden');
});

// Block6
const moreTextEl_block6 = document.getElementById('more_text_block6');
const toggleBtnEl_block6 = document.getElementById('toggle-btn_block6');
const hideBtnEl_block6 = document.getElementById('hide-btn_block6');

toggleBtnEl_block6.addEventListener('click', () => {
    moreTextEl_block6.classList.toggle('hidden');
    toggleBtnEl_block6.classList.toggle('hidden');
    hideBtnEl_block6.classList.toggle('hidden');
});

hideBtnEl_block6.addEventListener('click', () => {
    moreTextEl_block6.classList.toggle('hidden');
    toggleBtnEl_block6.classList.toggle('hidden');
    hideBtnEl_block6.classList.toggle('hidden');
});
