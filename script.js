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
