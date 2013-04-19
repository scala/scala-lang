---
layout: newsbase
title: News Archive
---

{% for p in site.categories.news limit: 1 %}
  {% assign post = p %}
  {% include render-news-item.html %}
{% endfor %}
