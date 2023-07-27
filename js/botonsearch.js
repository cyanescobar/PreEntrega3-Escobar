function search() {
    let searchTerm = document.getElementById('searchInput').value;
    console.log('Término de búsqueda:', searchTerm);
  }
  document.getElementById('searchButton').addEventListener('click', search);

