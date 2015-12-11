---
layout: page
title: Archive
---

## News & Blog

<ul class="news-archive-list">
{% for p in site.posts %}
  {% if p.post-type == 'news' or p.post-type == 'blog' %}
    <li class="news-archive-entry">
      {% if p.post-type == 'blog' %}
        <span class="label label-primary">Blog</span>
      {% elsif p.post-type == 'news' %}  
        <span class="label label-success">News</span>
      {% endif %}  
      {% if p.link-out %}
        <b><a href="{{ p.link-out }}">{{ p.title }}</a></b>
      {% else %}
        <b><a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a></b>
      {% endif %}
        <br><span class="news-archive-date">{{ p.date | date: "%A, %B %d, %Y" }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>

## Announcements & Changelog

<ul class="news-archive-list">
{% for p in site.categories.news %}
  {% if p.post-type == 'announcement' %}
    <li class="news-archive-entry">
      {% if p.link-out %}
        <b><a href="{{ p.link-out }}">{{ p.title }}</a></b>
      {% else %}
        <b><a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a></b>
      {% endif %}
        <br><span class="news-archive-date">{{ p.date | date: "%A, %B %d, %Y" }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>
