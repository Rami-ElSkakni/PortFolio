const testimonial = document.querySelectorAll('.testimonials__carousel');
const buttons = document.querySelectorAll('.btn--container__item');

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        testimonial.forEach((testimonial,i) => {
            testimonial.classList.remove('testimonials__carousel--selected');
            buttons[i].classList.remove('btn--container__item--selected')
        })
        testimonial[i].classList.add('testimonials__carousel--selected')
        buttons[i].classList.add('btn--container__item--selected')
    })
})

