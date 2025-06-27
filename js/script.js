if (document.getElementById('glossaryAccordion')) {
    var accordion = new bootstrap.Accordion(document.getElementById('glossaryAccordion'));
}
let debounceTimeout;
document.getElementById('searchInput')?.addEventListener('input', function(e) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        let searchTerm = e.target.value.toLowerCase();
        let items = document.querySelectorAll('.accordion-item');
        let visibleItems = 0;
        items.forEach(item => {
            let term = item.querySelector('.accordion-button').textContent.toLowerCase();
            item.style.display = term.includes(searchTerm) ? 'block' : 'none';
            if (term.includes(searchTerm)) visibleItems++;
        });
        let noResults = document.getElementById('no-results');
        if (!noResults) {
            noResults = document.createElement('p');
            noResults.id = 'no-results';
            document.querySelector('.container').appendChild(noResults);
        }
        noResults.textContent = visibleItems === 0 ? 'Ничего не найдено' : '';
    }, 300);
});