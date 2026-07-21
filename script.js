const copyButtons = document.querySelectorAll('.copy-btn');
const copyToast = document.getElementById('copy-toast');

copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const codeElement = button.closest('.code-console').querySelector('code');
        const code = codeElement.textContent;
        try {
            await navigator.clipboard.writeText(code);
            
            button.classList.add('copied');
            const btnText = button.querySelector('.btn-text');
            btnText.textContent = 'Copied!';
            
            copyToast.classList.add('show');
            
            setTimeout(() => {
                button.classList.remove('copied');
                btnText.textContent = 'Copy Code';
                copyToast.classList.remove('show');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});

const consoles = document.querySelectorAll('.code-console');
consoles.forEach(consoleEl => {
    const tabs = consoleEl.querySelectorAll('.console-tab');
    const contents = consoleEl.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(content => {
                if (content.getAttribute('data-tab-panel') === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});
