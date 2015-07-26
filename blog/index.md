---
layout: blog
title: Blog
---

{% for p in site.tags.blog-post limit: 5 %}
  {% assign post = p %}
  {% include render-news-item.html %}
{% endfor %}


<ul class="post-list">
  {% for p in site.categories.blog %}
    {% if p.post-type == 'blog' %}
      <li>
        {% if p.link-out %}
          <a href="{{ p.link-out }}">{{ p.title }}</a>
        {% else %}
          <a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>
        {% endif %}
          <span class="date">( {{ p.date | date: "%A, %B %d, %Y" }} )</span>
      </li>
    {% endif %}
  {% endfor %}
</ul>