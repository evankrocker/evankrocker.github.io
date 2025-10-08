---
layout: home
title: Evan's Vinyl Collection
---

<!-- Bootstrap CSS for GitHub Pages compatibility -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<body>
  <p class="lead">Total records: <strong>{{ site.records | size }}</strong></p>
  <div class="table-responsive">
    <table class="table align-middle table-bordered table-hover">
      <thead class="table-light">
        <tr>
          <th scope="col">Album Artwork</th>
          <th scope="col">Artist</th>
          <th scope="col">Album Title</th>
          <th scope="col">Year Released</th>
        </tr>
      </thead>
      <tbody>
        {% assign sorted = site.records | sort: 'year' | reverse %}
        {% for record in sorted %}
        <tr>
          <td style="width:110px;">
            <a href="{{ record.url }}">
              <img src="{{ record.cover }}" alt="{{ record.title }} cover" class="img-fluid rounded shadow-sm" style="max-width:100px;">
            </a>
          </td>
          <td>{{ record.artist }}</td>
          <td>
            <a href="{{ record.url }}">
              {{ record.title }}
            </a>
          </td>
          <td>{{ record.year }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</body>
</div>
