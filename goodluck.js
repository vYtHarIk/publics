document.getElementById('searchButton').addEventListener('click', function () {

  const name = document.getElementById('searchInput').value.trim();
  const email = document.getElementById('searchInput').value.trim();
  const phone = document.getElementById('searchInput').value.trim();

  if (name === '' || email === '' || phone === '') {
    document.getElementById('errorMessage').style.display = 'block';
  } else {
    window.location.href = 'shop.html';
  }
});


