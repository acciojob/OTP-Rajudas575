//your JS code here. If required.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('.code');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', async (e) => {
            if (e.target.value) {
                // Move focus to next input if a value is entered
                if (index < inputs.length - 1) {
                    await delay(100);
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', async (e) => {
            if (e.key === 'Backspace') {
                // Move focus to previous input if backspace is pressed
                if (index > 0) {
                    await delay(100);
                    inputs[index - 1].focus();
                }
            }
        });
    });
});
