//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('.code');
    
    inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value) {
            // Move focus to next input if a value is entered
            if (index < inputs.length - 1) {
                setTimeout(() => {
                    inputs[index + 1].focus();
                    const event = new Event('input', { bubbles: true });
                    inputs[index + 1].dispatchEvent(event);
                }, 100); // delay of 100 milliseconds
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            // Move focus to previous input if backspace is pressed
            if (index > 0) {
                setTimeout(() => {
                    inputs[index - 1].focus();
                    const event = new Event('input', { bubbles: true });
                    inputs[index - 1].dispatchEvent(event);
                }, 100); // delay of 100 milliseconds
            }
        }
    });
});
});
