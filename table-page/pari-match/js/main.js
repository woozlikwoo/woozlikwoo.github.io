// Получаем ссылки на элементы кнопок и блока с информацией
const showInfoButtons = document.getElementsByClassName("show-info");
const hideInfoButtons = document.getElementsByClassName("hide-info");
const infoBlocks = document.getElementsByClassName("info");

// Добавляем обработчик события клика на кнопку "More Info" для каждой кнопки
for (let i = 0; i < showInfoButtons.length; i++) {
  showInfoButtons[i].addEventListener("click", function () {
    // Отображаем соответствующий блок с информацией
    infoBlocks[i].style.display = "grid";
    // Скрываем кнопку "More Info" и показываем кнопку "Hide Info" для данной кнопки
    showInfoButtons[i].style.display = "none";
    hideInfoButtons[i].style.display = "block";
  });
}

// Добавляем обработчик события клика на кнопку "Hide Info" для каждой кнопки
for (let i = 0; i < hideInfoButtons.length; i++) {
  hideInfoButtons[i].addEventListener("click", function () {
    // Скрываем соответствующий блок с информацией
    infoBlocks[i].style.display = "none";
    // Скрываем кнопку "Hide Info" и показываем кнопку "More Info" для данной кнопки
    showInfoButtons[i].style.display = "block";
    hideInfoButtons[i].style.display = "none";
  });
}

const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");

// Получаем ширину блока1
const block1Width = block1.offsetWidth;

// Устанавливаем ширину блока2 равной ширине блока1 с вычетом 40px
block2.style.width = block1Width - 40 + "px";

// Обновляем размер блока2 при изменении размера блока1 (это можно сделать событием или в зависимости от вашей конкретной логики)
window.addEventListener("resize", () => {
  const newBlock1Width = block1.offsetWidth;
  // Обновляем ширину блока2 с учетом вычета 40px
  block2.style.width = newBlock1Width - 40 + "px";
});
