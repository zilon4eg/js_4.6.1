const popup = document.getElementById('modal_main');
const popupSuccess = document.getElementById('modal_success');

popup.className = 'modal modal_active';

const closeBtn = document.querySelectorAll('.modal__close');
const executeBtn = document.querySelector('.show-success');

console.log(closeBtn);

closeBtn[0].onclick = () => {
    popup.className = 'modal';
}

closeBtn[1].onclick = () => {
    popup.className = 'modal';
}

closeBtn[2].onclick = () => {
    popupSuccess.className = 'modal';
}

executeBtn.onclick = () => {
    popup.className = 'modal';
    popupSuccess.className = 'modal modal_active';
}

// Код, конечно, работает, но почему-то не обрабатываются строки 15 и 16. Это
// становится видно если закомменировать строку 24. Кнопка с классом
// "btn btn_danger modal__close show-success" попадает в переменную на строке 6,
// но при клике по ней не обрабатывается код на стр 15 и 16. Но если строки 23-26
// закомментировать, строки 15 и 16 работают.
