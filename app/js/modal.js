// Скрипт для динамического обновления контента в модальном окне
(function() {

    // Получаем данные из переводов
    const getDetails = () => window.translation.details();

    // Функция получения версий для конкретной детали
    function getVersions(detailKey) {
        const details = getDetails();
        return details[detailKey] ? details[detailKey].versions : [];
    }

    const modal = document.getElementById('demo-modal');
    const modalTitle = document.querySelector('.modal__content__title');
    const modalDesc = document.querySelector('.modal__content__description');
    const modalPrice = document.querySelector('.modal__content__price');
    const closeBtn = document.querySelector('.modal__close');
    const versionSelect = document.getElementById('versionSelect');

    let currentDetailKey = null;
    let currentVersions = [];

    function openModal() {
        if (modal) modal.classList.add('modal--open');
    }

    function closeModal() {
        if (modal) modal.classList.remove('modal--open');
    }

    // Обновление содержимого модалки по объекту версии
    function updateModalWithVersion(version) {
        if (modalTitle) modalTitle.textContent = version.title;
        if (modalDesc) modalDesc.textContent = version.description;
        if (modalPrice) modalPrice.textContent = version.price;
        rebuildCarousel(version.images);
    }

    // Заполнение селектора опциями
    function populateVersionSelector(versions) {
        if (!versionSelect) return;
        versionSelect.innerHTML = '';
        versions.forEach((version, index) => {
            const option = document.createElement('option');
            option.value = index;
            // Используем versionTitle, если есть, иначе title
            option.textContent = version.versionTitle || version.title;
            versionSelect.appendChild(option);
        });

        const selectorContainer = document.querySelector('.modal__version-selector');
        if (versions.length > 0) {
            versionSelect.selectedIndex = 0;
            updateModalWithVersion(versions[0]);
        }

        // Скрываем контейнер, если версия только одна
        if (selectorContainer) {
            if (versions.length <= 1) {
                selectorContainer.classList.add('hidden');
            } else {
                selectorContainer.classList.remove('hidden');
            }
        }
    }

    // Обработчик смены версии
    if (versionSelect) {
        versionSelect.addEventListener('change', function() {
            const index = parseInt(this.value, 10);
            if (currentVersions[index]) {
                updateModalWithVersion(currentVersions[index]);
            }
        });
    }

    // Функция загрузки детали по ключу (использует данные из переводов)
    function loadDetail(detailKey) {
        const versions = getVersions(detailKey);
        if (!versions || versions.length === 0) return;

        currentDetailKey = detailKey;
        currentVersions = versions;

        populateVersionSelector(currentVersions);
    }

    // fillModal – публичная функция для вызова извне
    function fillModal(detailKey) {
        loadDetail(detailKey);
    }

    // Обработчики кликов на точки
    const points = document.querySelectorAll('[class^="showcase__point_"]');
    points.forEach(point => {
        point.addEventListener('click', (e) => {
            e.preventDefault();
            const match = point.className.match(/showcase__point_(\w+)/);
            if (match) {
                fillModal(match[1]);
                openModal();
            }
        });
    });

    // Обработчики на кнопки "More"
    const moreButtons = document.querySelectorAll('[class^="showcase__description_"][class*="__button"]');
    moreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let parent = btn.parentElement;
            while (parent && !parent.className.match(/showcase__description_\w+/)) {
                parent = parent.parentElement;
            }
            if (parent) {
                const match = parent.className.match(/showcase__description_(\w+)/);
                if (match) {
                    fillModal(match[1]);
                    openModal();
                }
            }
        });
    });

    // Закрытие по крестику
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    }

    // Закрытие по клику на фон
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Закрытие по Esc
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('modal--open')) {
            closeModal();
        }
    });

    // Функция перестройки карусели
    function rebuildCarousel(images) {
        const carouselContainer = document.querySelector('.modal__content__flex .carousel');
        if (!carouselContainer) return;

        const count = images.length;
        if (count === 0) return;

        carouselContainer.innerHTML = '';

        const sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'carousel__slider-wrapper';

        const inner = document.createElement('div');
        inner.className = 'carousel__inner';
        inner.style.width = `${count * 100}%`;
        inner.style.transition = 'margin-left 0.8s cubic-bezier(0.77, 0, 0.175, 1)';

        images.forEach((src) => {
            const article = document.createElement('article');
            article.style.width = `${100 / count}%`;

            const img = document.createElement('img');
            img.src = src;
            img.className = 'carousel__inner__img';
            article.appendChild(img);

            inner.appendChild(article);
        });

        sliderWrapper.appendChild(inner);
        carouselContainer.appendChild(sliderWrapper);

        const arrowsContainer = document.createElement('div');
        arrowsContainer.className = 'carousel__slider-prev-next-control';
        arrowsContainer.style.position = 'absolute';
        arrowsContainer.style.top = '50%';
        arrowsContainer.style.width = '100%';
        arrowsContainer.style.transform = 'translateY(-50%)';
        arrowsContainer.style.display = 'flex';
        arrowsContainer.style.justifyContent = 'space-between';
        arrowsContainer.style.padding = '0 10px';
        arrowsContainer.style.boxSizing = 'border-box';
        arrowsContainer.style.pointerEvents = 'none';

        const prevBtn = document.createElement('button');
        prevBtn.textContent = '❮';
        prevBtn.style.pointerEvents = 'auto';
        prevBtn.style.width = '40px';
        prevBtn.style.height = '40px';
        prevBtn.style.borderRadius = '50%';
        prevBtn.style.background = '#fff';
        prevBtn.style.border = 'none';
        prevBtn.style.opacity = '0.7';
        prevBtn.style.cursor = 'pointer';
        prevBtn.style.fontSize = '1.7em';
        prevBtn.style.lineHeight = '1';
        prevBtn.style.color = '#f97316';
        prevBtn.style.transition = 'opacity 0.3s';
        prevBtn.addEventListener('mouseenter', () => { prevBtn.style.opacity = '1'; });
        prevBtn.addEventListener('mouseleave', () => { prevBtn.style.opacity = '0.7'; });

        const nextBtn = document.createElement('button');
        nextBtn.textContent = '❯';
        nextBtn.style.pointerEvents = 'auto';
        nextBtn.style.width = '40px';
        nextBtn.style.height = '40px';
        nextBtn.style.borderRadius = '50%';
        nextBtn.style.background = '#fff';
        nextBtn.style.border = 'none';
        nextBtn.style.opacity = '0.7';
        nextBtn.style.cursor = 'pointer';
        nextBtn.style.fontSize = '1.7em';
        nextBtn.style.lineHeight = '1';
        nextBtn.style.color = '#f97316';
        nextBtn.style.transition = 'opacity 0.3s';
        nextBtn.addEventListener('mouseenter', () => { nextBtn.style.opacity = '1'; });
        nextBtn.addEventListener('mouseleave', () => { nextBtn.style.opacity = '0.7'; });

        arrowsContainer.appendChild(prevBtn);
        arrowsContainer.appendChild(nextBtn);
        carouselContainer.appendChild(arrowsContainer);

        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel__slider-dot-control';
        dotsContainer.style.position = 'absolute';
        dotsContainer.style.bottom = '10px';
        dotsContainer.style.width = '100%';
        dotsContainer.style.textAlign = 'center';

        const dots = [];
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('span');
            dot.style.display = 'inline-block';
            dot.style.width = '10px';
            dot.style.height = '10px';
            dot.style.borderRadius = '5px';
            dot.style.background = '#bbb';
            dot.style.margin = '0 5px';
            dot.style.cursor = 'pointer';
            dot.style.transition = 'background 0.3s';
            dot.dataset.index = i;

            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });

            dotsContainer.appendChild(dot);
            dots.push(dot);
        }
        carouselContainer.appendChild(dotsContainer);

        let currentIndex = 0;

        function updateCarousel() {
            inner.style.marginLeft = `-${currentIndex * 100}%`;
            dots.forEach((dot, idx) => {
                dot.style.background = idx === currentIndex ? '#f97316' : '#bbb';
            });
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + count) % count;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % count;
            updateCarousel();
        });

        updateCarousel();
    }

    // Делаем публичные методы доступными глобально
    window.currentDetailKey = currentDetailKey;
    window.currentVersions = currentVersions;
    window.fillModal = fillModal;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.rebuildCarousel = rebuildCarousel;
    window.updateModalWithVersion = updateModalWithVersion;
    window.populateVersionSelector = populateVersionSelector;

})();