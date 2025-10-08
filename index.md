---
layout: home
title: Evan's Vinyl Collection
---

<style>
  .record-list { padding: 0; list-style: none; }
  .record-list li { margin-bottom: 1.2em; }
  .record-cover {
    max-width: 100px;
    height: auto;
    vertical-align: middle;
    margin-right: 1em;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  @media (max-width: 600px) {
    .record-cover { max-width: 60px; }
  }
</style>

# Evan's Vinyl Collection

**Total records:** {{ site.records | size }}

<ul class="record-list">
{% assign sorted = site.records | sort: 'year' | reverse %}
  {% for record in sorted %}
    <li>
      <a href="{{ record.url }}">
        <img src="{{ record.cover }}" alt="{{ record.title }} cover" class="record-cover" />
        <strong>{{ record.title }}</strong> by {{ record.artist }} ({{ record.year }})
      </a>
    </li>
  {% endfor %}
</ul>
