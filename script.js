function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += daysInPreviousMonth;
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const resultElement = document.getElementById('result');
    
    if (ageDays > 0 && ageMonths > 0) {
        resultElement.textContent = `You are exactly ${ageYears} years ${ageMonths} months and ${ageDays} days old`;
    } else if (ageMonths > 0 && ageDays === 0) {
        resultElement.textContent = `You are exactly ${ageYears} years and ${ageMonths} months old`;
    } else if (ageMonths === 0 && ageDays > 0) {
        resultElement.textContent = `You are exactly ${ageYears} years and ${ageDays} days old`;
    } else {
        resultElement.textContent = `You are exactly ${ageYears} years old`;
    }

    // Trigger the animation
    resultElement.style.animation = 'none'; // Reset animation
    setTimeout(() => {
        resultElement.style.animation = ''; // Re-apply animation
    }, 10); // Small delay to reset the animation
}



document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });

    // Set initial theme based on user's system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});

function scrollToMainPage() {
    document.getElementById('first-page').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('first-page').classList.add('hidden');
        document.getElementById('main-page').classList.remove('hidden');
        document.getElementById('main-page').classList.add('fade-in');
        document.getElementById('main-page').classList.add('slide-in');
    }, 1000); // Wait for the fade-out animation to complete
}
