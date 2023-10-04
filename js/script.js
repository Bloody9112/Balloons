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
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Додати активний клас до натиснутої кнопки
  button.classList.add('active');
}
