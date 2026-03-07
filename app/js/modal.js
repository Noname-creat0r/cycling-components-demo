// Скрипт для динамического обновления контента в модальном окне
(function() {
    
    // Данные для каждой детали (ключ соответствует суффиксу класса)
    const detailsData = {
        wheel: {
            versions: [
                {
                    title: 'Карбоновый руль',
                    description: 'Карбоновый аэродинамический руль-приставка для ТТ велосипедов – это эргономичная, разработанная с учетом анатомии предплечья руки, замена стандартным приставкам круглого сечения. Установка руля Model-1 создает аэродинамическое преимущество за счет идеального примыкания предплечья гонщика к рулю и созданию, таким образом, единой аэродинамической системы. Эффект такой системы выражается в значительной экономии мощности гонщика на преодоление сопротивление воздуха. Особенно эффективно, при правильно выставленной посадке велогонщика на ТТ велосипеде. При езде на стандартных рулях-приставках, рука имеет только 2 точки опоры: кисть и локоть. Распределённая таким образом нагрузка иногда создает болевые ощущения и дискомфорт в точках опоры. В рулях Model-1 нагрузка равномерно распределяется по всей длине руля тем самым уменьшая давление, доставляя комфорт и удовольствие от быстрой езды на ТТ велосипеде',
                    price: '500$',
                    images: [
                        'img/carousel/wheel/1.jpg',
                        'img/carousel/wheel/2.jpg',
                        'img/carousel/wheel/3.jpg',
                        'img/carousel/wheel/4.jpg',
                        'img/carousel/wheel/5.jpg'
                    ]
                },
                {
                    title: 'Карбоновый руль V2',
                    description: 'Карбоновый аэродинамический руль-приставка для ТТ велосипедов – это эргономичная, разработанная с учетом анатомии предплечья руки, замена стандартным приставкам круглого сечения. Установка руля Model-1 создает аэродинамическое преимущество за счет идеального примыкания предплечья гонщика к рулю и созданию, таким образом, единой аэродинамической системы. Эффект такой системы выражается в значительной экономии мощности гонщика на преодоление сопротивление воздуха. Особенно эффективно, при правильно выставленной посадке велогонщика на ТТ велосипеде. При езде на стандартных рулях-приставках, рука имеет только 2 точки опоры: кисть и локоть. Распределённая таким образом нагрузка иногда создает болевые ощущения и дискомфорт в точках опоры. В рулях Model-1 нагрузка равномерно распределяется по всей длине руля тем самым уменьшая давление, доставляя комфорт и удовольствие от быстрой езды на ТТ велосипеде',
                    price: '700$',
                    images: [
                        'img/carousel/wheel/1.jpg',
                        'img/carousel/wheel/2.jpg',
                        'img/carousel/wheel/3.jpg',
                        'img/carousel/wheel/4.jpg',
                        'img/carousel/wheel/5.jpg'
                    ]
                }
            ]
        },
        ring: {
            versions: [
                {
                    title: 'Звезда',
                    description: 'Звездочки Ring-1 для шоссейных и трековых велосипедов – это аэродинамические передние звездочки для соревнований, в том числе для гонок на треке, гонок на время и триатлону. Изготовленные из алюминия и усиленные карбоновой подложкой, звезды Ring-1 имеют гладкий утолщенный внешний профиль, который находится в одной плоскости с цепью, что помогает воздушному потоку гладко, без препятствий, обтекать поверхность при переходе с цепи на звезду. Созданный таким образом аэродинамический эффект может достигать до 5Вт, в зависимости от направления потока воздуха.',
                    price: '50$',
                    images: [
                        'img/carousel/ring/1.jpg',
                        'img/carousel/ring/2.jpg',
                        'img/carousel/ring/3.jpg'
                    ]
                }
            ]
        },
        axis: {
            versions: [
                {
                    title: 'Аэроэксцентрик',
                    description: 'Обычный эксцентриковый зажим – один из самых недооцененных компонентов в велосипеде с ободными тормозами. Это простое устройство, задача которого удерживать колеса в дропаутах вилки, часто остается без внимания как у производителей велосипедов и колес, так и у потребителей. Стандартные быстросъемные эксцентриковые зажимы имеют значительное лобовое сопротивление потоку воздуха, поэтому он нуждается в улучшении аэродинамики. Аэроэксцентрики AluTi – это аэродинамическая конструкция эксцентрика, состоящая из трех компонентов: двух минималистичных дюралевых шайб и одним специально изготовленным титановым болтом, с зажимом обычным шестигранником. Это простая конструкция, но она имеет ряд значительных преимуществ относительно стандартных эксцентриков. Во-первых, AliTi защищает дропауты вилки, предотвращая их от повреждения при затягивании. На наших эксцентриках обе шайбы имеют фиксаторы положения, поэтому они просто устанавливаются в осевую прорезь вилки, а затем сквозной титановый болт затягивает систему без любого скольжения по вилке. Это особенно важно для велосипедов с полностью карбоновыми дропаутами. Во-вторых, согласно измерительным тестам, пара эксцентриков AluTi позволяет сэкономить 3-4 ватта мощности гонщика. Это делает их одним из самых экономически выгодных вариантов улучшения аэродинамики. Более того, каждый компонент эксцентриков TriRig Styx изготовлен из легких материалов: чистого титана ВТ1-00 и дюралюминия Д16Т, что обеспечивает исключительную прочность, долговечность, коррозионную стойкость и сверхмалый вес. Весь комплект весит всего 50 грамм, что примерно на 100 грамм меньше, чем у стандартных эксцентриков для тренировок. Это небольшое улучшение для любого триатлонного или шоссейного велосипеда и самый экономически выгодный способ улучшить аэродинамику, внешний вид и вес вашего велосипеда.',
                    price: '30$',
                    images: [
                        'img/carousel/axis/1.jpg',
                        'img/carousel/axis/2.jpg',
                        'img/carousel/axis/3.jpg'
                    ]
                }
            ]
        },
        adapter: {
            versions: [
                {
                    title: 'Переходники',
                    description: 'Руль-приставка Model-1 может быть адаптирована практически к каждому ТТ велосипеду. Для этого необходимо подобрать правильный переходник из уже разработанных. В случае если такого переходника нет в нашем портфолио, наши специалисты помогут его спроектировать и произвести. В зависимости от уровня сложности и Вашего запроса переходники могут быть изготовлены из карбона либо из дюралюминия, применяемого в авиастроении.',
                    price: '30$',
                    images: [
                        'img/carousel/adapter/1.jpg',
                        'img/carousel/adapter/2.jpg',
                        'img/carousel/adapter/3.jpg',
                        'img/carousel/adapter/4.jpg',
                        'img/carousel/adapter/5.jpg'
                    ]
                }
            ]
        },
        fitter: {
            versions: [
                {
                    title: 'Подставки',
                    description: 'Проставки предназначены для идеальной подгонки положения аэроруля-приставки под посадку велогонщика на ТТ велосипеде. При этом обеспечивается значительное преимущество за счет идеальной формы проставок с минимальным аэродинамическим сопротивлением и за счет жесткости конструкции. Простаки могут быть разработаны под абсолютно любой тип руля. При этом используется либо карбон, либо технология 3D печати',
                    price: '20$',
                    images: [
                        'img/carousel/fitters/1.jpg',
                        'img/carousel/fitters/2.jpg',
                        'img/carousel/fitters/3.jpg',
                        'img/carousel/fitters/4.jpg',
                        'img/carousel/fitters/5.jpg'
                    ]
                }
            ]
        }
    };

      const modal = document.getElementById('demo-modal');
    const modalTitle = document.querySelector('.modal__content__title');
    const modalDesc = document.querySelector('.modal__content__description');
    const modalPrice = document.querySelector('.modal__content__price');
    const closeBtn = document.querySelector('.modal__close');
    const versionSelect = document.getElementById('versionSelect');

    let currentDetailKey = null;      // текущий ключ детали (wheel, ring...)
    let currentVersions = [];          // массив версий для текущей детали

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
            option.textContent = version.title;
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

    // Функция загрузки детали по ключу
    function loadDetail(detailKey) {
        const detail = detailsData[detailKey];
        if (!detail || !detail.versions || detail.versions.length === 0) return;

        currentDetailKey = detailKey;
        currentVersions = detail.versions;

        populateVersionSelector(currentVersions);
    }

    // Переопределяем fillModal, чтобы он использовал loadDetail
    function fillModal(detailKey) {
        loadDetail(detailKey);
    }

    // Обработчики кликов на точки и кнопки More
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

    // Функция перестройки карусели под нужное количество изображений
    function rebuildCarousel(images) {
        const carouselContainer = document.querySelector('.modal__content__flex .carousel');
        if (!carouselContainer) return;
    
        const count = images.length;
        if (count === 0) return;
    
        // Очищаем контейнер
        carouselContainer.innerHTML = '';
    
        // Создаём обёртку слайдера
        const sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'carousel__slider-wrapper';
    
        const inner = document.createElement('div');
        inner.className = 'carousel__inner';
        inner.style.width = `${count * 100}%`;
        inner.style.transition = 'margin-left 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
    
        // Добавляем слайды
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
    
        // Создаём контейнер для стрелок
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
        arrowsContainer.style.pointerEvents = 'none'; // чтобы клики проходили сквозь контейнер
    
        // Кнопка "Назад"
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
    
        // Кнопка "Вперёд"
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
    
        // Точки (dots)
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
            // Сдвигаем inner
            inner.style.marginLeft = `-${currentIndex * 100}%`;
    
            // Обновляем активную точку
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
    
        // Инициализация
        updateCarousel();
    }

})();   