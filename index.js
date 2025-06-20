const form = document.getElementById('guest-form');
const list = document.getElementById('guest-list');
 
form.addEventListener('submit', e =>{
    e.preventDefault();
    const name = document.getElementById('guest-name').value .trim();
    const category = document.getElementById('guest-category').value;

    if(name && category){
        addGuest(name, category);
        form.reset ();
    }
});

function addGuest(name, category){
    const guest = document.createElement('div');
    guest.innerHTML = `
    <span>${name} (${category}) </span>
    <button class = "delete">Delete</button>`;


    guest.classList.add(category.toLowerCase());

guest.querySelector('.delete').addEventListener('click', () =>{
    guest.remove();

});
    list.prepend(guest);

}