(function() {
    document.querySelector('.hero__cta').addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#catalog');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.querySelector('#up').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelector('#contacts').addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('footer');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    function googleTranslateElementInit() {
        new google.translate.TranslateElement(
            {
                pageLanguage: 'ru', // Язык вашего сайта (русский)
                includedLanguages: 'en,de,fr,es,it,zh-CN,ja', // Какие языки добавить
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE // Компактный вид
            },
            'google_translate_element'
        );
    }
})();