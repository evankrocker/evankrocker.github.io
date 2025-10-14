# Vinyl Collection Site

A Jekyll-based website for cataloging your vinyl record collection, built with Bootstrap UI and designed for GitHub Pages hosting.

## Features

- **Collection Page**: Displays all records in a sortable table with album covers, titles, artists, release years, and genres
- **Statistics Page**: Automatically calculates and displays:
  - Total number of records
  - Count of albums by artist
  - Count of albums by genre
  - Additional stats (unique artists, genres represented, year span)
- **Responsive Design**: Built with Bootstrap 5 for mobile and desktop
- **Easy to Update**: Add, edit, or remove records by simply editing markdown files

## Setup for GitHub Pages

### 1. Create a GitHub Repository

1. Create a new repository on GitHub (e.g., `vinyl-collection`)
2. Make it public if you want to use GitHub Pages for free

### 2. Configure the Site

Edit `_config.yml` and update:

```yaml
baseurl: "/vinyl-collection"  # Your repository name (or "" if using username.github.io)
url: "https://yourusername.github.io"  # Your GitHub Pages URL
```

### 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/vinyl-collection.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be available at `https://yourusername.github.io/vinyl-collection/`

## Adding Records to Your Collection

Records are stored as markdown files in the `_records` folder. Each record file contains front matter with the album information.

### Create a New Record

1. Create a new file in the `_records` folder (e.g., `_records/my-album.md`)
2. Add the following front matter:

```yaml
---
album_title: "Album Title"
artist: "Artist Name"
year: 1990
genre: "Genre"
cover_image: "/assets/images/album-cover.jpg"
---
```

### Example Record

```yaml
---
album_title: "Abbey Road"
artist: "The Beatles"
year: 1969
genre: "Rock"
cover_image: "/assets/images/abbey-road.jpg"
---
```

### Required Fields

- `album_title`: The name of the album
- `artist`: The artist or band name
- `year`: Release year (numeric)
- `genre`: Music genre
- `cover_image`: Path to album cover image (optional)

## Adding Album Cover Images

1. Create the `assets/images` folder if it doesn't exist
2. Add your album cover images to this folder
3. Reference them in your record files as `/assets/images/filename.jpg`
4. If no cover image is provided, a placeholder will be displayed

## Managing Your Collection

### Editing a Record

1. Open the corresponding `.md` file in the `_records` folder
2. Update the front matter fields
3. Commit and push your changes

### Removing a Record

1. Delete the corresponding `.md` file from the `_records` folder
2. Commit and push your changes

### Statistics Auto-Update

The statistics page automatically recalculates all counts whenever you add, edit, or remove records. No manual updates needed!

## Local Development

To test your site locally before pushing to GitHub:

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler

### Installation

```bash
# Install dependencies
bundle install

# Run the local server
bundle exec jekyll serve

# View your site at http://localhost:4000
```

## Site Structure

```
vinyl-collection-site/
├── _config.yml           # Jekyll configuration
├── _layouts/
│   └── default.html      # Main layout with Bootstrap navbar
├── _records/             # Collection of vinyl records
│   ├── abbey-road.md
│   ├── thriller.md
│   └── ...
├── assets/
│   ├── css/
│   │   └── style.css     # Custom styles
│   └── images/           # Album cover images
├── index.html            # Main collection page
├── stats.html            # Statistics page
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## Customization

### Changing Colors

Edit `assets/css/style.css` to customize colors, fonts, and styling.

### Adding More Fields

To add additional fields to your records:

1. Add the field to the front matter in your record files
2. Update `index.html` to display the field in the table
3. Update `stats.html` if you want statistics for the new field

### Modifying Navigation

Edit `_layouts/default.html` to add or remove navigation items in the Bootstrap navbar.

## Troubleshooting

### Site Not Loading

- Check that GitHub Pages is enabled in your repository settings
- Verify the `baseurl` and `url` in `_config.yml` are correct
- Wait a few minutes after pushing changes for GitHub to rebuild the site

### Images Not Displaying

- Ensure images are in the `assets/images` folder
- Check that the path in `cover_image` matches the actual file location
- Image paths should start with `/assets/images/` for absolute paths

### Changes Not Appearing

- GitHub Pages can take 1-5 minutes to rebuild after pushing changes
- Clear your browser cache or try an incognito window
- Check the repository "Actions" tab for build errors

## License

Free to use and modify for your personal collection!

## Credits

Built with:
- [Jekyll](https://jekyllrb.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [GitHub Pages](https://pages.github.com/)
