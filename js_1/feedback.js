

let roolName = /[а-яА-ЯёЁ]/i;
let roolPhone = /^[+][7][(]\d{3}[)]\d{3}[-]\d{4}/;
let roolEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,4}$/i;

let validation = () => {
    let feedbackName = document.getElementById('feedback-name');
    let feedbackPhone = document.getElementById('feedback-phone');
    let feedbackEmail = document.getElementById('feedback-email');

    if (
        !feedbackName.value.match(roolName) || 
        !feedbackPhone.value.match(roolPhone) ||
        !feedbackEmail.value.match(roolEmail)
    ) {
        if (!feedbackName.value.match(roolName)) {
            alert('Имя может содержать только буквы');
            feedbackName.classList.add('feedback-input-wrong');
        } else {
            feedbackName.classList.remove('feedback-input-wrong');
        }

        if (!feedbackPhone.value.match(roolPhone)) {
            alert('Телефон должен иметь вид  +7(000)000-0000');
            feedbackPhone.classList.add('feedback-input-wrong');
        } else {
            feedbackPhone.classList.remove('feedback-input-wrong');
        }

        if (!feedbackEmail.value.match(roolEmail)) {
            alert('Email введен не правильно');
            feedbackEmail.classList.add('feedback-input-wrong');
        } else {
            feedbackEmail.classList.remove('feedback-input-wrong');
        }

    } else {
        alert('Сообщение отправлено');
    }
}

let feedbackBtn = document.getElementById('feedback-btn');
feedbackBtn.addEventListener('click', validation);
