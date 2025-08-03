function toggleDarkMode() {
  const theme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
}

function filterAlbums() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const albums = document.querySelectorAll(".album-card");
  albums.forEach(card => {
    const title = card.getAttribute("data-title");
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
