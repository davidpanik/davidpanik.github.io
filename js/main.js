(function(){
    styleConsole(
        [
            'Hello - have you come to look at my source-code?',
            'You won\'t see much here.',
            'Check out my projects on GitHub for some better examples.'
        ],
        {
            'background-color': 'black',
            'font-size': '20px',
            'padding': '1em',
            'color': '#007F0E',
            'margin': '-5px',
            'text-shadow': '0px 0px 20px rgba(150, 255, 150, 0.8)'
        }
    );

    initTabs('about');

    // Outputs styled messages to the console
    function styleConsole(messages, styles) {
        let str = '';
        for (var key in styles) {
            str += `${key}: ${styles[key]};`
        }

        messages.forEach((message) => console.log(`%c${message}`, str));
    }

    // Hide and show tab content (and handle deep linking)
    function initTabs(initial) {
        function showTab(id) {
            let sections = Array.from(document.getElementsByTagName('section'));
            sections.forEach((element) => element.style.display = 'none');

            id = id.replace('#', '');

            document.getElementById(id).style.display = 'block';
        }

        window.addEventListener('hashchange', () => {
            showTab(location.hash);
        });

        showTab(location.hash ? location.hash : initial);
    }
}())