const buttomOpenModal = document.getElementById(openModal);
const modalWrapper = document.querySelector('.modal-wrapper');

buttomOpenModal.onclick = () => {
    modalWrapper.classList.remove('invisible');
}

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" || modalWrapper.classList.contains('invisible') ){
        return;
    } else{
        modalWrapper.classList.add('invisible');   
    }
})