let listSelector = document.querySelectorAll(".nav-options li");

for(let i=0; i<listSelector.length; i++) {
    listSelector[i].addEventListener("click", function(){
        let currentActiveListItem = document.getElementById("active-list-option");
        currentActiveListItem.removeAttribute('id');
        listSelector[i].children[0].setAttribute('id', 'active-list-option');
    })
}