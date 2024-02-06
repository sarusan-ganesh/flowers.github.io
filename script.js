onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

// Add the crosswordButton event listener
document.getElementById('crosswordButton').addEventListener('click', function() {
    window.location.href = 'https://crosswordlabs.com/view/not-so-mini-crossword';
});
