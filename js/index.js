document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[command="--toggle"]').forEach(button => {
        const targetId = button.getAttribute('commandfor');
        const target = document.getElementById(targetId);

        if (!target) return;

        button.addEventListener('click', () => {
            target.hidden = !target.hidden;
        });
    });
});