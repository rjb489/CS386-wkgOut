document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.backgroundColor = this.style.backgroundColor === 'black' ? '#008080' : 'black';
        });
    });
});
