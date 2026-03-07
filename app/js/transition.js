// Скрипт для управления отображением описаний при наведении на точки
(function() {
    // Все точки
    const points = document.querySelectorAll('[class^="showcase__point_"]');
    // Все описания
    const descriptions = document.querySelectorAll('[class^="showcase__description_"]');

    // Соответствие между суффиксом класса (ring, wheel и т.д.) и DOM-элементом описания
    const descMap = new Map();
    descriptions.forEach(desc => {
        const match = desc.className.match(/showcase__description_(\w+)/);
        if (match) {
            descMap.set(match[1], desc);
        }
    });

    let activeDesc = null;      // текущее видимое описание
    let activePoint = null;     // точка, которая вызвала текущее описание
    let hideTimer = null;       // таймер для автоматического скрытия

    // Скрыть описание (удалить класс active)
    function hideDescription(desc) {
        if (desc) {
            desc.classList.remove('active');
        }
    }

    // Показать описание (добавить класс active)
    function showDescription(desc) {
        if (desc) {
            desc.classList.add('active');
        }
    }

    // Отменить текущий таймер
    function clearHideTimer() {
        if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }
    }

    // Запустить таймер на скрытие активного описания через 5 секунд
    function startHideTimer() {
        clearHideTimer(); // сначала сбросим предыдущий
        if (activeDesc) {
            hideTimer = setTimeout(() => {
                hideDescription(activeDesc);
                activeDesc = null;
                activePoint = null;
                hideTimer = null;
            }, 5000); // 5000 мс = 5 секунд
        }
    }

    // Обработчик входа мыши на точку
    function onPointEnter(event) {
        const point = event.currentTarget;
        const match = point.className.match(/showcase__point_(\w+)/);
        if (!match) return;
        const suffix = match[1];
        const targetDesc = descMap.get(suffix);
        if (!targetDesc) return;

        // Если наведены на ту же точку, что уже активна – просто перезапускаем таймер
        if (activePoint === point) {
            startHideTimer();
            return;
        }

        // Иначе переключаемся на новое описание
        clearHideTimer();               // отменяем старый таймер
        if (activeDesc) {               // скрываем предыдущее описание
            hideDescription(activeDesc);
        }
        showDescription(targetDesc);    // показываем новое
        activeDesc = targetDesc;
        activePoint = point;

        startHideTimer();               // запускаем таймер на скрытие
    }

    // Обработчик ухода мыши с точки
    function onPointLeave(event) {
        const point = event.currentTarget;
        // Если ушли с активной точки – запускаем таймер (описание начнёт исчезать через 5 сек)
        if (activePoint === point) {
            startHideTimer();
        }
    }

    // Назначаем обработчики на все точки
    points.forEach(point => {
        point.addEventListener('mouseenter', onPointEnter);
        point.addEventListener('mouseleave', onPointLeave);
    });

    // Изначально скрываем все описания (на случай, если какое-то видимо)
    descriptions.forEach(desc => desc.classList.remove('active'));
})();