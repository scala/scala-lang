---
layout: page
title: News Archive
---

<ul class="news-archive-list">
{% for p in site.categories.news limit: 30 %}
<li class="news-archive-entry">
  {% if p.link-out %}
    <a href="{{ p.link-out }}">{{ p.title }}</a>
  {% else %}
    <a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>
  {% endif %}
    <span class="date">( {{ p.date | date: "%A, %B %d, %Y" }} )</span>
</li>
{% endfor %}
</ul>
