---
layout: page
title: Vinyl Records
permalink: /records.html
---

# Vinyl Records

**Total records:** {{ site.records | size }}

<ul>
{% assign sorted = site.records | sort: 'artist' %}
  {% for record in sorted %}
    <li>
      <a href="{{ record.url }}">{{ record.title }}</a> by {{ record.artist }} ({{ record.year }})
    </li>
  {% endfor %}
</ul>
