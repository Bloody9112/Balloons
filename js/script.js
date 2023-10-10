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


///* Плавний скролл *///


// Додаємо обробник події для всіх посилань з класом "nav-link"
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault(); // Забороняємо стандартну дію посилань

		const targetId = this.getAttribute('href').substring(1); // Отримуємо ідентифікатор якоря
		const targetElement = document.getElementById(targetId); // Знаходимо елемент за ідентифікатором

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop, // Позиція верхнього краю цільового елемента
				behavior: 'smooth' // Плавна прокрутка
			});
		}
	});
});


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


///* FLight Type *///

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
const modal = document.querySelector('.header_order');
const orderAcceptButton = document.getElementById('order_accept');
const orderCancelButton = document.getElementById('order_cancel');
const headerPage = document.querySelector('.header_page');
const nav = document.querySelector('.nav'); // Додайте отримання посилання на .nav

// Додайте обробник подій для натискання на .white_button
whiteButton.addEventListener('click', () => {
  modal.style.display = 'block';
  headerPage.style.visibility = 'hidden';
  document.body.style.overflow = 'hidden';

  // Отримайте висоту .nav і врахуйте її при позиціюванні модального вікна
  const navHeight = nav.offsetHeight;
  modal.style.top = `calc(50% + ${navHeight / 2}px)`;
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
});

orderAcceptButton.addEventListener('click', () => {
  alert('Форму успішно надіслано!');
  modal.style.display = 'none'; // Закрити модальне вікно
  headerPage.style.visibility = 'visible'; // Показати контент .header_page
  document.body.style.overflow = 'auto'; // Дозволити прокрутку сторінки
});

orderCancelButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Закрити модальне вікно
  headerPage.style.visibility = 'visible'; // Показати контент .header_page
  document.body.style.overflow = 'auto'; // Дозволити прокрутку сторінки
});


