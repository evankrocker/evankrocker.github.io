document.addEventListener('DOMContentLoaded', function() {
  // Search functionality for artist list
  var searchArtistInput = document.getElementById('search-artist-input');
  var artistList = document.getElementById('artist-list');
  var artists = artistList.getElementsByTagName('li');

  searchArtistInput.addEventListener('keyup', function() {
    var filter = searchArtistInput.value.toLowerCase();
    for (var i = 0; i < artists.length; i++) {
      var artistName = artists[i].getAttribute('data-name').toLowerCase();
      if (artistName.includes(filter)) {
        artists[i].style.display = '';
      } else {
        artists[i].style.display = 'none';
      }
    }
  });

  // Search functionality for album list on artist page
  var searchInput = document.getElementById('search-input');
  var albumList = document.getElementById('album-list');
  var albums = albumList.getElementsByTagName('li');

  searchInput.addEventListener('keyup', function() {
    var filter = searchInput.value.toLowerCase();
    for (var i = 0; i < albums.length; i++) {
      var albumTitle = albums[i].getAttribute('data-title').toLowerCase();
      if (albumTitle.includes(filter)) {
        albums[i].style.display = '';
      } else {
        albums[i].style.display = 'none';
      }
    }
  });
});
