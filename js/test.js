let btnModal = document.querySelectorAll('.btn');
let modalWindow = document.querySelector('.form-modal');

console.log(btnModal)

for(let i = 0; i < btnModal.length; i++) {
    btnModal[i].onclick = function () {
        if (modalWindow.classList.contains('hidden') == true) {
            modalWindow.classList.toggle('hidden');
        }
        else {
            modalWindow.classList.toggle('hidden');
        }
    }
}