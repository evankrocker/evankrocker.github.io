---
layout: default
title: "Home"
---

<h1>Vinyl Record Collection</h1>
<p>Total records: <strong>{{ site.data.records.records | size }}</strong></p>

<h2>Artists</h2>
<ul>
{% assign artists = site.data.records.records | map: "artist" | uniq | sort %}
{% for artist in artists %}
  <li>
    <a href="{{ '/artist/' | append: artist | slugify | append: '.html' }}">{{ artist }}</a>
  </li>
{% endfor %}
</ul>
