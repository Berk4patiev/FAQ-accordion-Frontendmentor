const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const accordionDescription = btn.nextElementSibling;
        const plusIcons = btn.querySelector('.plus-icon');
        const minusIcons = btn.querySelector('.minus-icon');

        if(accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            plusIcons.style.display = 'block';
            minusIcons.style.display = 'none';
        }
        else{
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            plusIcons.style.display = 'none';
            minusIcons.style.display = 'block';
        }
    });
})