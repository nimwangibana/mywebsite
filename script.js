function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('active');
}

const anchorElements = document.querySelectorAll('a[href^="#"]'); // Get all <a> tags with href starting with #
anchorElements.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId); // Get the target element

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll the target element into view
        } else {
            console.error("Target element not found");
        }
    });
});