function search() {
    var searchInputValue = document.getElementById('searchInput').value;
    alert('Searching for: ' + searchInputValue);
    // Add your search functionality here
}
function resetPage() {
    location.reload(true); // Reload the current page, forcing it to fetch from the server (true argument)
}

