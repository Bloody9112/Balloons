///* Navbar *///

// Отримуємо всі елементи з класом "nav-list_language"
const languageLinks = document.querySelectorAll(".nav-language .nav-link__language");

// Додаємо обробник події "click" для кожної кнопки в списку мов
languageLinks.forEach(link => {
	link.addEventListener("click", () => {
		// Видаляємо клас "active" у всіх елементів списку мов
		languageLinks.forEach(l => l.classList.remove("active"));

		// Додаємо клас "active" тільки до клікнутої кнопки
		link.classList.add("active");
	});
});

///* Count *///

function activateButton(button) {
	// Знайти всі кнопки
	var buttons = document.querySelectorAll('.count_columns_box');

	// Зняти активний клас з усіх кнопок
	buttons.forEach(function (btn) {
		btn.classList.remove('active');
	});

	// Додати активний клас до натиснутої кнопки
	button.classList.add('active');

	// Отримати текст кнопки і конвертувати його в число
	var count = parseInt(button.textContent);

	// Отримати посилання на елементи, які потрібно оновити
	var titleElement = document.querySelector('.total_price_title');
	var textElement = document.querySelector('.total_price_text');

	// Встановити текст у відповідні елементи відповідно до кількості людей
	if (count === 2) {
		titleElement.textContent = 'Вартість польоту для компанії з двох чоловік';
		textElement.textContent = '7500 гривень';
	} else if (count === 3) {
		titleElement.textContent = 'Вартість польоту для компанії з трьох чоловік';
		textElement.textContent = '11000 гривень';
	} else if (count === 4) {
		titleElement.textContent = 'Вартість польоту для компанії з чотирьох чоловік';
		textElement.textContent = '14000 гривень';
	} else if (count === 5) {
		titleElement.textContent = 'Вартість польоту для компанії з пʼятьох чоловік';
		textElement.textContent = '17000 гривень';
	} else if (count === 6) {
		titleElement.textContent = 'Вартість польоту для компанії з шести чоловік';
		textElement.textContent = '20000 гривень';
	}
}

///* Плавний скролл для всіх посилань *///


function smoothScrollToTarget(targetId) {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const headerHeight = document.querySelector('.nav').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top;
    const scrollToPosition = targetPosition + window.scrollY - headerHeight - (window.innerHeight * 0.025);

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
}

// Додаємо обробник події для всіх посилань з класом "nav-link"
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    smoothScrollToTarget(targetId);
  });
});

// Додаємо обробник події для посилання в тексті
const agreeLink = document.querySelector('.agree-text a');

if (agreeLink) {
  agreeLink.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    smoothScrollToTarget(targetId);
  });
}


///* Форма 3 *///

const button1 = document.querySelector(".image-option-button_1");
const button2 = document.querySelector(".image-option-button_2");

button1.addEventListener("click", function () {
	if (!button1.classList.contains("active")) {
		button1.classList.add("active");
		button2.classList.remove("active");
		button1.querySelector("img").src = "./img/main/certificate/email_logo_white.svg";
		button2.querySelector("img").src = "./img/main/certificate/print_logo_blue.svg";
	}
});

button2.addEventListener("click", function () {
	if (!button2.classList.contains("active")) {
		button2.classList.add("active");
		button1.classList.remove("active");
		button2.querySelector("img").src = "./img/main/certificate/print_logo_white.svg";
		button1.querySelector("img").src = "./img/main/certificate/email_logo_blue.svg";
	}
});


///* Flight Type *///

const buttons = document.querySelectorAll(".flight-button");

buttons.forEach((button) => {
	button.addEventListener("click", function () {
		buttons.forEach((btn) => {
			btn.classList.remove("active");
			const img = btn.querySelector("img");
			img.src = img.src.replace("_white.svg", "_blue.svg");
		});

		button.classList.add("active");
		const img = button.querySelector("img");
		img.src = img.src.replace("_blue.svg", "_white.svg");
	});
});


///* Modal Window *///

const whiteButton = document.querySelector('.white_button');
const blueButton = document.querySelector('.blue_button');
const modal = document.querySelector('.header_order');
const orderAcceptButton = document.getElementById('order_accept');
const orderCancelButton = document.getElementById('order_cancel');
const headerPage = document.querySelector('.header_page');
const nav = document.querySelector('.nav');
const formError = document.getElementById('form-error');

// Зберігаємо посилання на поля вводу
const nameInput = document.getElementById('name_3');
const phoneInput = document.getElementById('phone_3');

// Обробник подій для натискання на .white_button
whiteButton.addEventListener('click', () => {
	openModal();
});

// Обробник подій для натискання на .blue_button
blueButton.addEventListener('click', () => {
	openModal();
});

function openModal() {
	modal.style.display = 'block';
	headerPage.style.visibility = 'hidden';
	nav.style.display = 'none';
	disableScroll(); // Вимкнення прокрутки

	// Отримати висоту .nav і врахувати її при позиціюванні модального вікна
	const navHeight = nav.offsetHeight;
	modal.style.top = `calc(50% + ${navHeight / 2}px)`;
	modal.style.left = '50%';
	modal.style.transform = 'translate(-50%, -50%)';

	// При відкритті модального вікна приховати повідомлення про невалідну форму
	formError.style.display = 'none';

	// Очищаємо значення полів форми при відкритті модального вікна
	nameInput.value = '';
	phoneInput.value = '';
}

orderAcceptButton.addEventListener('click', () => {
	// Перевірка чи всі поля вводу заповнені
	if (document.getElementById('name_3').checkValidity() && document.getElementById('phone_3').checkValidity()) {
		alert('Форму успішно надіслано!');
		closeModal();
		// Очищаємо значення полів форми при успішному відправленні
		nameInput.value = '';
		phoneInput.value = '';
	} else {
		// Відображення повідомлення про невалідну форму
		formError.innerText = 'Будь ласка, заповніть всі обов\'язкові поля.';
		formError.style.display = 'block';
	}
});

orderCancelButton.addEventListener('click', () => {
	closeModal();
});

function closeModal() {
	modal.style.display = 'none';
	headerPage.style.visibility = 'visible';
	nav.style.display = 'block';
	enableScroll(); // Увімкнення прокрутки
	// При закритті модального вікна, також приховуйте повідомлення про невалідну форму
	formError.style.display = 'none';
}

// Змінні для збереження позиції прокрутки перед відкриттям модального вікна
let scrollPosition = 0;

// Функція для вимкнення прокрутки
function disableScroll() {
	scrollPosition = window.scrollY;
	document.body.style.overflow = 'hidden';
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollPosition}px`;
}

// Функція для увімкнення прокрутки
function enableScroll() {
	document.body.style.overflow = 'auto';
	document.body.style.position = 'static';
	window.scrollTo(0, scrollPosition);
}




///* Modal Main Form *///

// Отримайте посилання на необхідні елементи
const orderButton = document.querySelector('.order-button');
const userDataModal = document.getElementById('user-data-modal');
const acceptButton = document.getElementById('accept-button');
const cancelButton = document.getElementById('cancel-button');

// Отримайте інші необхідні елементи, які залишаються незмінними
const headerPageMain = document.querySelector('.header_page');
const navMain = document.querySelector('.nav');
const errorBox = document.getElementById('error-box');

// Функція для відкриття модального вікна
function openModalMain() {
	userDataModal.style.display = 'block';
	headerPageMain.style.visibility = 'hidden';
	navMain.style.display = 'none';
  document.body.scrollTop = 0; // Переносимо сторінку на верх
  document.documentElement.scrollTop = 0; // Для старих браузерів
  disableScroll();
	
	// Отримання даних з полів вводу
	const nameInput = document.getElementById('name');
	const surnameInput = document.getElementById('surname');
	const phoneInput = document.getElementById('phone');
	const emailInput = document.getElementById('email');
	const name2Input = document.getElementById('name_2');
	const surname2Input = document.getElementById('surname_2');
	const phone2Input = document.getElementById('phone_2');
	const email2Input = document.getElementById('email_2');
	const certificateType = document.querySelector('.image-option-button-active');

	// Вставка даних в модальне вікно
	document.getElementById('modal-name').textContent = nameInput.value;
	document.getElementById('modal-surname').textContent = surnameInput.value;
	document.getElementById('modal-phone').textContent = phoneInput.value;
	document.getElementById('modal-email').textContent = emailInput.value;

	document.getElementById('modal-name-2').textContent = name2Input.value;
	document.getElementById('modal-surname-2').textContent = surname2Input.value;
	document.getElementById('modal-phone-2').textContent = phone2Input.value;
	document.getElementById('modal-email-2').textContent = email2Input.value;

	const modalCertificateType = document.getElementById('modal-certificate-type');
	modalCertificateType.textContent = certificateType ? 'Електронний' : 'Надрукований';

	errorBox.style.display = 'none'; // Приховуємо повідомлення про помилку
}

// Функція для закриття модального вікна
function closeModalMain() {
	userDataModal.style.display = 'none';
	headerPageMain.style.visibility = 'visible';
	navMain.style.display = 'block';
  document.body.style.overflow = 'auto'; // Дозволяємо прокрутку
  enableScroll();
}

// Функція для заборони прокрутки
function disableScroll() {
	const scrollPosition = window.scrollY;
	document.body.style.overflow = 'hidden';
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollPosition}px`;
}

// Функція для дозволу прокрутки
function enableScroll() {
	const scrollPosition = parseInt(document.body.style.top, 10) || 0;
	document.body.style.overflow = 'auto';
	document.body.style.position = 'static';
	document.body.style.top = '0';
	window.scrollTo(0, scrollPosition);
}

orderButton.addEventListener('click', () => {
	const nameInput = document.getElementById('name');
	const surnameInput = document.getElementById('surname');
	const phoneInput = document.getElementById('phone');
	const emailInput = document.getElementById('email');
	const name2Input = document.getElementById('name_2');
	const surname2Input = document.getElementById('surname_2');
	const phone2Input = document.getElementById('phone_2');
	const email2Input = document.getElementById('email_2');

	const allFieldsEmpty =
		nameInput.value === '' ||
		surnameInput.value === '' ||
		phoneInput.value === '' ||
		emailInput.value === '' ||
		name2Input.value === '' ||
		surname2Input.value === '' ||
		phone2Input.value === '' ||
		email2Input.value === '';

	if (allFieldsEmpty) {
		const errorBox = document.querySelector('.error-box');
		errorBox.textContent = 'Будь ласка, заповніть всі обов\'язкові поля.';
	} else {
		const errorBox = document.querySelector('.error-box');
		errorBox.textContent = '';
		openModalMain();
	}
});

acceptButton.addEventListener('click', () => {
	alert('Замовлення прийнято');
	closeModalMain();
});

cancelButton.addEventListener('click', () => {
	closeModalMain();
});












///* FancyBox *///
$(document).ready(function () {
	$("[data-fancybox]").fancybox();
});
