//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('.code');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value) {
                // Move focus to next input if a value is entered
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value) {
                // Move focus to previous input if backspace is pressed and current input is empty
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
});
